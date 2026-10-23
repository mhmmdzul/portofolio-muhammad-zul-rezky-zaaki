import { useEffect, useRef, useState } from "react";

// Panjang tali (px). Harus sama dengan padding-top .idcard-stage di CSS.
const ROPE = 90;
const STIFFNESS = 140; // kekuatan pegas yang menarik kartu kembali
const DAMPING = 7; // redaman — makin besar, makin cepat berhenti berayun
const MAX_STRETCH = 200; // seberapa jauh kartu boleh ditarik melewati panjang tali
const MAX_SPEED = 2500;

// Tulisan yang berulang di sepanjang tali lanyard
const STRAP_TEXT = "ZUL REZKY ZAAKI  •  DATA & AI ENGINEER  •  ".repeat(10);

// Di layar kecil, kartu ada di bawah teks hero → tali cukup pendek
const MOBILE_BREAKPOINT = 900;
const MOBILE_STRAP_TOP = 64;

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export default function IdCard({ name, role, tagline, photo, initials, hint }) {
  const stageRef = useRef(null);
  const cardRef = useRef(null);
  const strapRefs = useRef([]);
  const [showHint, setShowHint] = useState(true);

  // Posisi & kecepatan ujung atas kartu, relatif terhadap titik gantung
  const sim = useRef({
    x: 0,
    y: reducedMotion ? ROPE : -30,
    vx: 0,
    vy: 0,
    dragging: false,
    grabX: 0,
    grabY: 0,
    lastT: 0,
  });

  useEffect(() => {
    let frame;
    let prev = performance.now();
    const start = prev;

    // Seberapa jauh tali naik di atas titik gantung (sampai atas halaman)
    const strapTop = (stage) => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) return MOBILE_STRAP_TOP;
      const top = stage.getBoundingClientRect().top + window.scrollY;
      return Math.max(top + 20, MOBILE_STRAP_TOP);
    };

    const draw = () => {
      const s = sim.current;
      const card = cardRef.current;
      const stage = stageRef.current;
      const straps = strapRefs.current;
      if (!card || !stage || !straps.length) return;

      // Kartu miring mengikuti arah tali
      const angle = (Math.atan2(s.x, Math.max(s.y, 1)) * 180) / Math.PI;
      const tilt = clamp(-angle - s.vx * 0.02, -40, 40);
      card.style.transform = `translate(${s.x}px, ${s.y - ROPE}px) rotate(${tilt}deg)`;
      card.style.setProperty(
        "--shine",
        `${clamp(50 + s.x * 0.2 + tilt, 0, 100)}%`,
      );

      // Tali: lurus dari atas, lalu melengkung saat kendur
      const cx = stage.clientWidth / 2;
      const ex = cx + s.x;
      const ey = s.y;
      const sag = Math.max(0, ROPE - Math.hypot(s.x, s.y)) * 0.9;
      const d = `M ${cx} ${-strapTop(stage)} L ${cx} 0 Q ${(cx + ex) / 2} ${ey / 2 + sag} ${ex} ${ey}`;
      straps.forEach((path) => path && path.setAttribute("d", d));
    };

    const loop = (now) => {
      const s = sim.current;
      const dt = Math.min((now - prev) / 1000, 1 / 30);
      prev = now;

      if (!s.dragging) {
        // Ayunan pelan saat diam
        const sway = reducedMotion
          ? 0
          : Math.sin(((now - start) / 1000) * 1.2) * 5;
        s.vx += (-STIFFNESS * (s.x - sway) - DAMPING * s.vx) * dt;
        s.vy += (-STIFFNESS * (s.y - ROPE) - DAMPING * s.vy) * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
      }

      draw();
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  const toStage = (e) => {
    const rect = stageRef.current.getBoundingClientRect();
    return {
      px: e.clientX - (rect.left + rect.width / 2),
      py: e.clientY - rect.top,
    };
  };

  const onPointerDown = (e) => {
    const s = sim.current;
    const { px, py } = toStage(e);
    s.dragging = true;
    s.grabX = px - s.x;
    s.grabY = py - s.y;
    s.vx = 0;
    s.vy = 0;
    s.lastT = performance.now();
    e.currentTarget.setPointerCapture(e.pointerId);
    cardRef.current.classList.add("is-dragging");
    setShowHint(false);
  };

  const onPointerMove = (e) => {
    const s = sim.current;
    if (!s.dragging) return;
    const { px, py } = toStage(e);
    let tx = px - s.grabX;
    let ty = py - s.grabY;

    // Batasi seberapa jauh tali bisa ditarik
    const dist = Math.hypot(tx, ty);
    const max = ROPE + MAX_STRETCH;
    if (dist > max) {
      tx = (tx / dist) * max;
      ty = (ty / dist) * max;
    }

    const now = performance.now();
    const dt = Math.max((now - s.lastT) / 1000, 1 / 120);
    s.vx = clamp(s.vx * 0.5 + ((tx - s.x) / dt) * 0.5, -MAX_SPEED, MAX_SPEED);
    s.vy = clamp(s.vy * 0.5 + ((ty - s.y) / dt) * 0.5, -MAX_SPEED, MAX_SPEED);
    s.x = tx;
    s.y = ty;
    s.lastT = now;
  };

  const onPointerUp = (e) => {
    const s = sim.current;
    if (!s.dragging) return;
    s.dragging = false;
    // Kalau kartu ditahan diam sebelum dilepas, jangan dilempar
    if (performance.now() - s.lastT > 80) {
      s.vx = 0;
      s.vy = 0;
    }
    cardRef.current?.classList.remove("is-dragging");
    if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const setStrapRef = (i) => (el) => {
    strapRefs.current[i] = el;
  };

  return (
    <div className="idcard-wrap">
      <div className="idcard-stage" ref={stageRef}>
        <svg className="idcard-strap" aria-hidden="true">
          {/* Garis tepi biru di kedua sisi tali */}
          <path
            ref={setStrapRef(0)}
            className="idcard-strap-edge"
            fill="none"
            strokeWidth="18"
            strokeLinecap="butt"
          />
          {/* Badan tali (kain gelap) */}
          <path
            ref={setStrapRef(1)}
            id="idcard-strap-core"
            className="idcard-strap-core"
            fill="none"
            strokeWidth="14"
            strokeLinecap="butt"
          />
          {/* Tulisan berulang yang mengikuti tali */}
          <text className="idcard-strap-text" dy="2.6">
            <textPath href="#idcard-strap-core" startOffset="0">
              {STRAP_TEXT}
            </textPath>
          </text>
        </svg>

        <div
          className="idcard"
          ref={cardRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <span className="idcard-clip" aria-hidden="true" />
          <span className="idcard-shine" aria-hidden="true" />

          <div className="idcard-header">
            <span className="idcard-logo">{initials}</span>
            <span className="idcard-label">PORTFOLIO PASS</span>
          </div>

          <div className="idcard-photo">
            <img src={photo} alt={name} draggable={false} />
          </div>

          <p className="idcard-name">{name}</p>
          <p className="idcard-role">{role}</p>

          <div className="idcard-footer">
            <span className="idcard-tag">{tagline}_</span>
            <span className="idcard-barcode" aria-hidden="true" />
          </div>
        </div>
      </div>

      <p className={`idcard-hint ${showHint ? "" : "is-hidden"}`}>{hint}</p>
    </div>
  );
}
