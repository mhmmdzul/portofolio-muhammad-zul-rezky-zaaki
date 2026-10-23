import { useState } from "react";

const svgProps = {
  viewBox: "0 0 24 24",
  width: 18,
  height: 18,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

// Ikon kecil di samping judul tiap kelompok
const GROUP_ICONS = {
  lang: (
    <svg {...svgProps}>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  ),
  web: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  ),
  ml: (
    <svg {...svgProps}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  ),
  data: (
    <svg {...svgProps}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  db: (
    <svg {...svgProps}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  ),
  tools: (
    <svg {...svgProps}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />
    </svg>
  ),
};

// Logo teknologi; kalau tidak ada atau gagal dimuat → badge inisial
function TechIcon({ item }) {
  const [failed, setFailed] = useState(false);

  if (!item.icon || failed) {
    return (
      <span className="tech-tile-mono" aria-hidden="true">
        {item.mono ?? item.name.slice(0, 2)}
      </span>
    );
  }

  const classes = [
    "tech-tile-img",
    item.invert ? "is-invert" : "",
    item.light ? "is-light" : "",
  ].join(" ");

  return (
    <img
      src={item.icon}
      alt=""
      loading="lazy"
      className={classes}
      onError={() => setFailed(true)}
    />
  );
}

export default function TechStack({ groups, intro, L }) {
  return (
    <div className="techstack">
      <p className="techstack-intro" data-reveal>
        {intro}
      </p>

      {groups.map((g, gi) => (
        <div
          key={g.key}
          className="techstack-group"
          data-reveal
          style={{ "--i": gi }}
        >
          <h3 className="techstack-heading">
            <span
              className={`techstack-heading-icon techstack-heading-icon--${g.key}`}
            >
              {GROUP_ICONS[g.key]}
            </span>
            {L(g.group)}
          </h3>

          <ul className="techstack-grid">
            {g.items.map((item, i) => (
              <li
                key={item.name}
                className="tech-tile"
                style={{ "--t": i }}
                title={item.name}
              >
                <TechIcon item={item} />
                <span className="tech-tile-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
