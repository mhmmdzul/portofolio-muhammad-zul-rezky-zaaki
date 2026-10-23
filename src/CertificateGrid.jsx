import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CertificateGrid({ items, labels }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  // Esc untuk menutup, dan kunci scroll halaman saat modal terbuka
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  const active = open !== null ? items[open] : null;

  return (
    <>
      <div className="cert-grid">
        {items.map((c, i) => (
          <button
            key={c.image}
            type="button"
            className="cert-card"
            data-reveal
            style={{ "--i": i % 3 }}
            onClick={() => setOpen(i)}
            aria-label={`${labels.view}: ${c.title}`}
          >
            <img src={c.image} alt="" loading="lazy" />
            <span className="cert-card-info">
              <span className="cert-card-issuer">{c.issuer}</span>
              <span className="cert-card-title">{c.title}</span>
            </span>
          </button>
        ))}
      </div>

      {active &&
        createPortal(
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={close}
          >
            <div
              className="cert-modal-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-image">
                <img src={active.image} alt={active.title} />
              </div>
              <div className="cert-modal-footer">
                <div>
                  <p className="cert-card-issuer">{active.issuer}</p>
                  <h3 className="cert-modal-title">{active.title}</h3>
                  {active.date && (
                    <p className="cert-modal-date">
                      {labels.issued}: {active.date}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={close}
                  autoFocus
                >
                  {labels.close}
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
