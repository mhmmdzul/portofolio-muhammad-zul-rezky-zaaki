import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Posisi tiap foto (persen dari lebar/tinggi collage) dan kemiringannya,
// disesuaikan dengan jumlah foto yang ditampilkan.
const LAYOUTS = {
  1: { ratio: "16 / 11", items: [{ x: 10, y: 6, w: 80, r: -2 }] },
  2: {
    ratio: "16 / 11",
    items: [
      { x: 2, y: 4, w: 60, r: -4 },
      { x: 38, y: 34, w: 60, r: 3 },
    ],
  },
  3: {
    ratio: "11 / 10",
    items: [
      { x: 3, y: 3, w: 60, r: -3 },
      { x: 52, y: 24, w: 46, r: 4 },
      { x: 16, y: 54, w: 50, r: -2 },
    ],
  },
  4: {
    ratio: "1 / 1",
    items: [
      { x: 2, y: 3, w: 55, r: -3 },
      { x: 46, y: 8, w: 52, r: 4 },
      { x: 6, y: 50, w: 50, r: 2 },
      { x: 48, y: 54, w: 50, r: -4 },
    ],
  },
};

const MAX_VISIBLE = 4;

// bare = true: tampilkan collage saja, tanpa judul dan pembungkus section
export default function ProjectGallery({ items, heading, labels, bare }) {
  const [open, setOpen] = useState(null);
  const count = items?.length ?? 0;

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(
    () => setOpen((i) => (i - 1 + count) % count),
    [count],
  );
  const next = useCallback(() => setOpen((i) => (i + 1) % count), [count]);

  // Keyboard (Esc / ← / →) dan kunci scroll halaman saat lightbox terbuka
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, prev, next]);

  if (!count) return null;

  const visible = items.slice(0, MAX_VISIBLE);
  const layout = LAYOUTS[visible.length];
  const hiddenCount = count - visible.length;

  const collage = (
    <div className="collage" style={{ "--ratio": layout.ratio }}>
      {visible.map((item, i) => {
        const pos = layout.items[i];
        return (
          <button
            key={item.src}
            type="button"
            className="collage-item"
            style={{
              "--x": `${pos.x}%`,
              "--y": `${pos.y}%`,
              "--w": `${pos.w}%`,
              "--r": `${pos.r}deg`,
              "--z": i + 1,
              "--n": i,
            }}
            onClick={() => setOpen(i)}
            aria-label={`${labels.open}: ${item.caption}`}
          >
            <img src={item.src} alt={item.caption} loading="lazy" />
            {item.caption && (
              <span className="collage-caption">{item.caption}</span>
            )}
            {hiddenCount > 0 && i === visible.length - 1 && (
              <span className="collage-more">+{hiddenCount}</span>
            )}
          </button>
        );
      })}
    </div>
  );

  const lightbox =
    open !== null &&
    createPortal(
      <div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={items[open].caption}
        onClick={close}
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={close}
          aria-label={labels.close}
        >
          ×
        </button>

        {count > 1 && (
          <button
            type="button"
            className="lightbox-nav lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label={labels.prev}
          >
            ‹
          </button>
        )}

        <figure
          className="lightbox-figure"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={items[open].src} alt={items[open].caption} />
          <figcaption>
            {items[open].caption}
            {count > 1 && (
              <span className="lightbox-count">
                {open + 1} / {count}
              </span>
            )}
          </figcaption>
        </figure>

        {count > 1 && (
          <button
            type="button"
            className="lightbox-nav lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label={labels.next}
          >
            ›
          </button>
        )}
      </div>,
      document.body,
    );

  if (bare) {
    return (
      <div className="collage-wrap">
        {collage}
        {lightbox}
      </div>
    );
  }

  return (
    <div className="detail-section" data-reveal style={{ "--i": 3 }}>
      <h3>{heading}</h3>
      {collage}
      {lightbox}
    </div>
  );
}
