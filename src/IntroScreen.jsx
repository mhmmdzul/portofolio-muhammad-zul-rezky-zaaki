import { useEffect, useState } from "react";

const TEXT = {
  en: {
    lead: "Welcome to my",
    main: "Portfolio Website",
    skip: "Click anywhere to skip",
  },
  id: {
    lead: "Selamat datang di",
    main: "Website Portofolio Saya",
    skip: "Klik di mana saja untuk melewati",
  },
};

const STORAGE_KEY = "intro-seen";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const HOLD = reduceMotion ? 900 : 2900; // lama layar pembuka tampil (ms)
const EXIT = reduceMotion ? 300 : 1100; // lama animasi menghilang (ms)

// Sudah pernah tampil di tab ini? (aman kalau penyimpanan browser diblokir)
function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* abaikan */
  }
}

const iconProps = {
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ICONS = [
  // Kode
  <svg key="code" {...iconProps}>
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
  </svg>,
  // Data
  <svg key="data" {...iconProps}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>,
  // AI
  <svg key="ai" {...iconProps}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>,
];

export default function IntroScreen({ lang = "en" }) {
  const host =
    typeof window !== "undefined"
      ? window.location.host.replace(/^www\./, "")
      : "";
  const [phase, setPhase] = useState(() => (alreadySeen() ? "done" : "in")); // in | out | done
  const t = TEXT[lang] ?? TEXT.en;

  // Tandai sudah tampil, supaya refresh berikutnya langsung ke halaman
  useEffect(() => {
    if (phase !== "done") markSeen();
  }, [phase]);

  // Kunci scroll selama layar pembuka tampil
  useEffect(() => {
    if (phase === "done") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  // Jadwal: tampil → menghilang → selesai
  useEffect(() => {
    if (phase === "in") {
      const timer = setTimeout(() => setPhase("out"), HOLD);
      return () => clearTimeout(timer);
    }
    if (phase === "out") {
      const timer = setTimeout(() => setPhase("done"), EXIT);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Esc untuk melewati
  useEffect(() => {
    if (phase === "done") return;
    const onKey = (e) => {
      if (e.key === "Escape") setPhase("out");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  if (phase === "done") return null;

  const leadWords = t.lead.split(" ");
  const mainWords = t.main.split(" ");

  return (
    <div
      className={`intro ${phase === "out" ? "is-out" : ""}`}
      onClick={() => setPhase("out")}
      role="presentation"
    >
      <div className="intro-inner">
        <div className="intro-icons">
          {ICONS.map((icon, n) => (
            <span key={n} className="intro-icon" style={{ "--n": n }}>
              {icon}
            </span>
          ))}
        </div>

        <h1 className="intro-title">
          <span className="intro-line">
            {leadWords.map((w, i) => (
              <span key={i} className="intro-word" style={{ "--w": i }}>
                {w}
              </span>
            ))}
          </span>
          <span className="intro-line intro-line--accent">
            {mainWords.map((w, i) => (
              <span
                key={i}
                className="intro-word"
                style={{ "--w": leadWords.length + i }}
              >
                {w}
              </span>
            ))}
          </span>
        </h1>

        {host && (
          <span className="intro-url">
            <span className="intro-url-text">{host}</span>
          </span>
        )}
      </div>

      <p className="intro-skip">{t.skip}</p>
    </div>
  );
}
