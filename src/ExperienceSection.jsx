import ProjectGallery from "./ProjectGallery";

export default function ExperienceSection({ items, L, labels }) {
  const featured = items.filter((e) => e.featured);
  const others = items.filter((e) => !e.featured);

  return (
    <div className="exp-wrap">
      {featured.map((e, i) => {
        const photos = e.photos ?? [];
        const classes = [
          "exp-feature",
          photos.length ? "" : "exp-feature--no-photos",
          e.reverse ? "exp-feature--reverse" : "",
        ].join(" ");

        return (
          <article key={i} className={classes} data-reveal>
            <div className="exp-feature-text">
              <span className="exp-date-pill">{L(e.date)}</span>
              <h3 className="exp-title">{L(e.title)}</h3>
              <p className="exp-org">@ {L(e.org)}</p>
              {e.unit && <p className="exp-unit">{L(e.unit)}</p>}
              <p className="exp-summary">{L(e.detail)}</p>

              {e.bullets && (
                <ul className="exp-bullets">
                  {L(e.bullets).map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}

              {e.tags && (
                <div className="tech-chip-row exp-tags">
                  {L(e.tags).map((tag) => (
                    <span key={tag} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {photos.length > 0 && (
              <ProjectGallery
                bare
                labels={labels}
                items={photos.map((p) => ({
                  src: p.src,
                  caption: L(p.caption),
                }))}
              />
            )}
          </article>
        );
      })}

      {others.length > 0 && (
        <div className="exp-others">
          <h3 className="exp-others-heading">{labels.other}</h3>
          <ul className="timeline exp-timeline">
            {others.map((e, i) => (
              <li
                key={i}
                className="timeline-row"
                data-reveal
                style={{ "--i": i }}
              >
                <span className="timeline-date">{L(e.date)}</span>
                <div>
                  <h3>{L(e.title)}</h3>
                  <p>{L(e.detail)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
