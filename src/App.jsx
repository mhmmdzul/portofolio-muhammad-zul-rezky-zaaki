import { useState, useEffect, useRef } from "react";
import {
  profile,
  stats,
  skills,
  skillsIntro,
  projects,
  certificates,
  certificateLabels,
  experience,
  experienceLabels,
  translations,
  contactConfig,
  contactStatus,
} from "./data";
import photo from "./assets/photo.jpg";
import photo2 from "./assets/photo2.jpg";
import "./App.css";
import "./animations.css";
import IdCard from "./IdCard";
import ProjectGallery from "./ProjectGallery";
import CertificateGrid from "./CertificateGrid";
import ExperienceSection from "./ExperienceSection";
import TechStack from "./TechStack";
import IntroScreen from "./IntroScreen";
import BackToTop from "./BackToTop";

const DEFAULT_LANG = "en";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Form kontak memakai Web3Forms kalau access key sudah diisi di data.js
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const hasFormKey =
  Boolean(contactConfig?.web3formsKey) &&
  !contactConfig.web3formsKey.startsWith("PASTE");

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

// Urutan bagian halaman, dipakai untuk menu yang menyala mengikuti scroll
const SECTION_IDS = ["home", "about", "portfolio", "contact"];

// "Data Analyst & AI Engineer" -> ["Data Analyst", "AI Engineer"]
const ROLES = profile.role.split(" & ");

// Ambil teks sesuai bahasa: { en, id } -> versi bahasa aktif,
// string/array biasa -> dikembalikan apa adanya.
function tr(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.en;
  }
  return value;
}

// Daftar repo GitHub sebuah proyek: pakai githubRepos kalau ada,
// atau githubUrl lama sebagai satu repo tanpa label.
function getRepos(project) {
  if (project.githubRepos?.length) return project.githubRepos;
  if (project.githubUrl) return [{ url: project.githubUrl }];
  return [];
}

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Efek mengetik bergantian untuk teks role di hero
function useTypewriter(words, typeSpeed = 70, deleteSpeed = 40, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 300);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          ),
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return prefersReducedMotion ? words.join(" & ") : text;
}

// Angka yang menghitung naik saat terlihat di layar
function CountUp({ value }) {
  const ref = useRef(null);
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  const decimals = match ? (match[1].split(".")[1] || "").length : 0;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(
    match && !prefersReducedMotion ? (0).toFixed(decimals) + suffix : value,
  );

  useEffect(() => {
    if (!match || prefersReducedMotion || !ref.current) return;
    const target = parseFloat(match[1]);
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay((target * eased).toFixed(decimals) + suffix);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

// Spotlight yang mengikuti posisi kursor di dalam kartu
function handleSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

// Ikon GitHub yang dipakai ulang di beberapa tempat
function GithubIcon({ size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const projectIcons = [
  <svg
    key="eye"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  <svg
    key="chart"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>,
  <svg
    key="spark"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v5M12 17v5M4 12H2M22 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
  </svg>,
];

const tabIcons = {
  projects: (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  certificates: (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
    </svg>
  ),
  experience: (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  skills: (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  ),
};

const statIcons = [
  <svg
    key="cap"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3 2 8l10 5 10-5-10-5z" />
    <path d="M6 10v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
  </svg>,
  <svg
    key="folder"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </svg>,
  <svg
    key="badge"
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M9 12.5 7 21l5-3 5 3-2-8.5" />
  </svg>,
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [tab, setTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [contactForm, setContactForm] = useState(EMPTY_FORM);
  // idle | sending | success | error
  const [sendStatus, setSendStatus] = useState("idle");
  const botcheckRef = useRef(null);
  const t = translations[lang];
  const cs = contactStatus[lang];
  const L = (value) => tr(value, lang);
  const typedRole = useTypewriter(ROLES);
  const progressRef = useRef(null);

  // Atribut lang di <html> ikut berganti
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Ukur tinggi header supaya posisi berhenti saat klik menu selalu pas
  useEffect(() => {
    const header = document.querySelector(".header");
    if (!header) return;
    const update = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${header.offsetHeight}px`,
      );
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Menu yang menyala mengikuti bagian yang sedang dilihat
  useEffect(() => {
    if (selectedProject !== null) return;
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedProject]);

  // Garis progres scroll
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      progressRef.current?.style.setProperty("--progress", progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Elemen dengan data-reveal muncul saat masuk layar
  useEffect(() => {
    const elements = document.querySelectorAll(
      "[data-reveal]:not(.is-visible)",
    );
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [tab, selectedProject, lang]);

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    if (sendStatus === "success" || sendStatus === "error") {
      setSendStatus("idle");
    }
  };

  // Cara lama: buka aplikasi email (dipakai kalau access key belum diisi)
  const sendViaMailto = () => {
    const subject = encodeURIComponent(
      contactForm.subject || t.mailDefaultSubject,
    );
    const body = encodeURIComponent(
      `${contactForm.message}\n\n— ${contactForm.name} (${contactForm.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (sendStatus === "sending") return;

    // Perangkap bot: manusia tidak bisa melihat/mencentang kotak ini
    if (botcheckRef.current?.checked) {
      setSendStatus("success");
      setContactForm(EMPTY_FORM);
      return;
    }

    if (!hasFormKey) {
      sendViaMailto();
      return;
    }

    setSendStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: contactConfig.web3formsKey,
          subject: `[Portfolio] ${contactForm.subject || t.mailDefaultSubject}`,
          from_name: contactForm.name,
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setSendStatus("success");
      setContactForm(EMPTY_FORM);
    } catch {
      setSendStatus("error");
    }
  };

  const openProject = (i) => {
    setSelectedProject(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    setSelectedProject(null);
    requestAnimationFrame(() => {
      document
        .getElementById("portfolio")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const NAV = [
    { id: "home", label: t.navHome },
    { id: "about", label: t.navAbout },
    { id: "portfolio", label: t.navPortfolio },
    { id: "contact", label: t.navContact },
  ];

  const handleNavClick = () => {
    setSelectedProject(null);
    setNavOpen(false);
  };

  const galleryLabels = {
    open: t.galleryOpen,
    close: t.galleryClose,
    prev: t.galleryPrev,
    next: t.galleryNext,
  };

  const current = selectedProject !== null ? projects[selectedProject] : null;

  return (
    <div className="page">
      <IntroScreen lang={DEFAULT_LANG} />
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />

      <header className="header">
        <a
          href="#home"
          className="brand"
          onClick={() => setSelectedProject(null)}
        >
          <span className="brand-accent">{initials(profile.name)}</span>
          <span className="brand-word">Zul Rezky Zaaki</span>
        </a>

        <nav className={`nav ${navOpen ? "nav--open" : ""}`}>
          {NAV.map((item) => {
            const isActive = !current && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <a
            href={profile.cv}
            download
            className="header-cv"
            aria-label={t.downloadCv}
            title={t.downloadCv}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            <span className="header-cv-text">CV</span>
          </a>
          <div className="lang-toggle">
            <button
              className={lang === "id" ? "active" : ""}
              onClick={() => setLang("id")}
            >
              ID
            </button>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {current ? (
          <section key={selectedProject} className="section project-detail">
            <button className="detail-back" onClick={closeProject}>
              ← {t.backToPortfolio}
            </button>

            <div className="detail-grid">
              <div className="detail-content">
                <p className="project-category">{L(current.category)}</p>
                <h2 className="detail-title">{L(current.title)}</h2>
                <p className="detail-desc">{L(current.description)}</p>

                <div className="detail-stats">
                  <div className="stat-card">
                    <p className="stat-value">
                      <CountUp value={current.techStack.length} />
                    </p>
                    <p className="stat-label">{t.statTechnologies}</p>
                  </div>
                  <div className="stat-card">
                    <p className="stat-value">
                      <CountUp value={L(current.bullets).length} />
                    </p>
                    <p className="stat-label">{t.statKeyFeatures}</p>
                  </div>
                </div>

                <div className="detail-actions">
                  {current.notebookFile && (
                    <a
                      href={current.notebookFile}
                      download
                      className="btn btn-primary"
                    >
                      ↓ {t.downloadNotebook}
                    </a>
                  )}
                  {getRepos(current).map((repo) => (
                    <a
                      key={repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost btn-with-icon"
                    >
                      <GithubIcon size={18} />
                      {repo.label ? L(repo.label) : t.viewGithub} ↗
                    </a>
                  ))}
                  {current.datasetUrl && (
                    <a
                      href={current.datasetUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost"
                    >
                      {t.viewDataset} ↗
                    </a>
                  )}
                  {current.link && (
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost"
                    >
                      {t.detailsLabel} ↗
                    </a>
                  )}
                </div>
              </div>

              <div
                className={`detail-thumb project-thumb--${selectedProject % 3}`}
              >
                {current.image ? (
                  <img
                    src={current.image}
                    alt={L(current.title)}
                    className="project-thumb-img"
                  />
                ) : (
                  projectIcons[selectedProject % projectIcons.length]
                )}
              </div>
            </div>

            {(current.problem || current.solution) && (
              <div className="detail-section" data-reveal>
                <h3>{t.problemSolutionHeading}</h3>
                <div className="ps-grid">
                  {current.problem && (
                    <div className="ps-item ps-item--problem">
                      <p className="ps-label">{t.problemLabel}</p>
                      <p className="ps-text">{L(current.problem)}</p>
                    </div>
                  )}
                  {current.solution && (
                    <div className="ps-item ps-item--solution">
                      <p className="ps-label">{t.solutionLabel}</p>
                      <p className="ps-text">{L(current.solution)}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="detail-section" data-reveal style={{ "--i": 1 }}>
              <h3>{t.techStackHeading}</h3>
              <div className="tech-chip-row">
                {current.techStack.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section" data-reveal style={{ "--i": 2 }}>
              <h3>{t.keyAchievementsHeading}</h3>
              <ul className="achievement-list">
                {L(current.bullets).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            {current.gallery && (
              <ProjectGallery
                heading={t.galleryHeading}
                labels={galleryLabels}
                items={current.gallery.map((g) => ({
                  src: g.src,
                  caption: L(g.caption),
                }))}
              />
            )}

            <nav className="project-nav" aria-label="Project navigation">
              {selectedProject > 0 ? (
                <button
                  className="project-nav-card"
                  onClick={() => openProject(selectedProject - 1)}
                >
                  <span className="project-nav-label">← {t.prevProject}</span>
                  <span className="project-nav-title">
                    {L(projects[selectedProject - 1].title)}
                  </span>
                </button>
              ) : (
                <span />
              )}
              {selectedProject < projects.length - 1 ? (
                <button
                  className="project-nav-card project-nav-card--next"
                  onClick={() => openProject(selectedProject + 1)}
                >
                  <span className="project-nav-label">{t.nextProject} →</span>
                  <span className="project-nav-title">
                    {L(projects[selectedProject + 1].title)}
                  </span>
                </button>
              ) : (
                <span />
              )}
            </nav>
          </section>
        ) : (
          <>
            {/* ── Hero ── */}
            <section id="home" className="hero">
              <div className="hero-main">
                <p className="hero-kicker">{t.kicker}</p>
                <h1 className="hero-name">{profile.name}</h1>
                <p className="hero-role">
                  <span className="sr-only">{profile.role}</span>
                  <span aria-hidden="true">{typedRole}</span>
                  <span className="typed-cursor" aria-hidden="true" />
                </p>
                <p className="hero-blurb">{t.heroBlurb}</p>

                <div className="hero-socials">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                  </a>
                </div>

                <div className="hero-actions">
                  <a href="#portfolio" className="btn btn-primary">
                    {t.ctaProjects}
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    {t.ctaContact}
                  </a>
                </div>
              </div>

              <div className="hero-idcard">
                <IdCard
                  name={profile.name}
                  role={profile.role}
                  tagline={t.tagline}
                  photo={photo}
                  initials={initials(profile.name)}
                  hint={t.idcardHint}
                />
              </div>
            </section>

            {/* ── About ── */}
            <section id="about" className="section" data-reveal>
              <div className="about-layout">
                <div className="about-content">
                  <h2 className="about-title">
                    {t.aboutHeading}{" "}
                    <span className="accent">{t.aboutHeadingAccent}</span>
                    <span className="title-line" aria-hidden="true" />
                  </h2>
                  <p className="about-subheading">
                    {t.aboutIntro} {profile.name}
                  </p>
                  {t.bio.map((p, i) => (
                    <p key={i} className="about-bio-text">
                      {p}
                    </p>
                  ))}

                  <div className="stats-grid">
                    {stats.map((s, i) => (
                      <div
                        key={i}
                        className="stat-card"
                        data-reveal
                        style={{ "--i": i + 1 }}
                      >
                        <span className="stat-icon">{statIcons[i]}</span>
                        <p className="stat-value">
                          <CountUp value={s.value} />
                        </p>
                        <p className="stat-label">{L(s.label)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="about-actions">
                    <a href={profile.cv} download className="btn btn-primary">
                      ↓ {t.downloadCv}
                    </a>
                    <a href="#portfolio" className="btn btn-ghost">
                      {t.ctaProjects} ↗
                    </a>
                  </div>
                </div>

                <div className="about-visual">
                  <div className="about-photo-frame">
                    <img
                      src={photo2}
                      alt={profile.name}
                      className="about-photo"
                    />
                    <span className="status-badge">
                      <span className="status-dot" /> {t.openToWork}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Portfolio ── */}
            <section id="portfolio" className="section" data-reveal>
              <div className="portfolio-header">
                <h2 className="portfolio-title">
                  {t.portfolioLead}{" "}
                  <span className="accent">{t.portfolioAccent}</span>
                </h2>
                <div className="tabs">
                  <button
                    className={`tab ${tab === "projects" ? "active" : ""}`}
                    onClick={() => setTab("projects")}
                  >
                    {tabIcons.projects} {t.tabProjects}
                  </button>
                  <button
                    className={`tab ${tab === "certificates" ? "active" : ""}`}
                    onClick={() => setTab("certificates")}
                  >
                    {tabIcons.certificates} {t.tabCertificates}
                  </button>
                  <button
                    className={`tab ${tab === "experience" ? "active" : ""}`}
                    onClick={() => setTab("experience")}
                  >
                    {tabIcons.experience} {t.tabExperience}
                  </button>
                  <button
                    className={`tab ${tab === "skills" ? "active" : ""}`}
                    onClick={() => setTab("skills")}
                  >
                    {tabIcons.skills} {t.tabSkills}
                  </button>
                </div>
              </div>

              <div key={tab} className="tab-panel">
                {tab === "projects" && (
                  <div className="project-cards">
                    {projects.map((p, i) => {
                      const repos = getRepos(p);
                      return (
                        <div
                          key={i}
                          className="project-card"
                          data-reveal
                          style={{ "--i": i }}
                          onMouseMove={handleSpotlight}
                        >
                          <div
                            className={`project-thumb project-thumb--${i % 3}`}
                          >
                            {p.image ? (
                              <img
                                src={p.image}
                                alt={L(p.title)}
                                className="project-thumb-img"
                              />
                            ) : (
                              projectIcons[i % projectIcons.length]
                            )}
                          </div>
                          <div className="project-card-body">
                            <p className="project-category">{L(p.category)}</p>
                            {p.highlight && (
                              <span className="project-highlight">
                                {L(p.highlight)}
                              </span>
                            )}
                            <h3 title={L(p.title)}>{L(p.title)}</h3>
                            <p className="project-card-desc">
                              {L(p.description)}
                            </p>
                            <div className="project-card-footer">
                              <div className="project-card-actions">
                                {p.notebookFile && (
                                  <a
                                    href={p.notebookFile}
                                    download
                                    className="project-icon-btn"
                                    aria-label={t.downloadNotebook}
                                    title={t.downloadNotebook}
                                  >
                                    <svg
                                      viewBox="0 0 24 24"
                                      width="16"
                                      height="16"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.8"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M12 3v12" />
                                      <path d="m7 10 5 5 5-5" />
                                      <path d="M5 21h14" />
                                    </svg>
                                  </a>
                                )}
                                {repos.map((repo) => {
                                  const label = repo.label
                                    ? L(repo.label)
                                    : t.viewGithub;
                                  return (
                                    <a
                                      key={repo.url}
                                      href={repo.url}
                                      target="_blank"
                                      rel="noreferrer"
                                      className={`project-icon-btn ${
                                        repo.short
                                          ? "project-icon-btn--labeled"
                                          : ""
                                      }`}
                                      aria-label={label}
                                      title={label}
                                    >
                                      <GithubIcon size={16} />
                                      {repo.short && <span>{repo.short}</span>}
                                    </a>
                                  );
                                })}
                              </div>
                              <button
                                className="project-details-link"
                                onClick={() => openProject(i)}
                              >
                                {t.detailsLabel} →
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {tab === "certificates" && (
                  <CertificateGrid
                    labels={certificateLabels[lang]}
                    items={certificates.map((c) => ({
                      image: c.image,
                      issuer: L(c.issuer),
                      title: L(c.title),
                      date: L(c.date),
                    }))}
                  />
                )}

                {tab === "experience" && (
                  <ExperienceSection
                    items={experience}
                    L={L}
                    labels={{ ...experienceLabels[lang], ...galleryLabels }}
                  />
                )}

                {tab === "skills" && (
                  <TechStack groups={skills} intro={L(skillsIntro)} L={L} />
                )}
              </div>
            </section>

            {/* ── Contact ── */}
            <section
              id="contact"
              className="section section-contact"
              data-reveal
            >
              <div className="contact-header">
                <h2 className="contact-title">
                  {t.contactTitleLead}{" "}
                  <span className="accent">{t.contactTitleAccent}</span>
                </h2>
                <p className="contact-subtitle">{t.contactSubtitle}</p>
              </div>

              <div className="contact-layout">
                <div className="contact-cards">
                  <a
                    className="contact-card"
                    data-reveal
                    style={{ "--i": 1 }}
                    href={`mailto:${profile.email}`}
                  >
                    <span className="contact-card-icon contact-card-icon--email">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m2 6 10 7 10-7" />
                      </svg>
                    </span>
                    <div>
                      <p className="contact-card-label">{t.labelEmail}</p>
                      <p className="contact-card-value">{profile.email}</p>
                    </div>
                  </a>

                  <a
                    className="contact-card"
                    data-reveal
                    style={{ "--i": 2 }}
                    href={`https://wa.me/${profile.whatsappDigits}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-card-icon contact-card-icon--wa">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.5 3.5A10 10 0 0 0 3.6 16.2L2 22l6-1.6A10 10 0 1 0 20.5 3.5z" />
                        <path d="M8.5 8.5c.3 2.6 3.4 5.7 6 6 .8.1 1.5-.4 1.7-1.1l.3-1-2.4-1.2-1 1a6.6 6.6 0 0 1-3.3-3.3l1-1-1.2-2.4-1 .3c-.7.2-1.2.9-1.1 1.7z" />
                      </svg>
                    </span>
                    <div>
                      <p className="contact-card-label">{t.labelWhatsapp}</p>
                      <p className="contact-card-value">
                        {profile.whatsappDisplay}
                      </p>
                    </div>
                  </a>

                  <div
                    className="contact-card"
                    data-reveal
                    style={{ "--i": 3 }}
                  >
                    <span className="contact-card-icon contact-card-icon--location">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="contact-card-label">{t.labelLocation}</p>
                      <p className="contact-card-value">{profile.location}</p>
                    </div>
                  </div>

                  <div className="contact-card-socials">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={profile.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>

                <form className="contact-form" onSubmit={handleContactSubmit}>
                  <p className="contact-form-heading">
                    <span className="accent">&gt;_</span> {t.sendMessageHeading}
                  </p>

                  {/* Perangkap bot — disembunyikan dari pengunjung */}
                  <input
                    ref={botcheckRef}
                    type="checkbox"
                    name="botcheck"
                    className="form-honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="contact-form-row">
                    <div className="field">
                      <label htmlFor="name">{t.formName}</label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder={t.formNamePh}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">{t.formEmail}</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder={t.formEmailPh}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="subject">{t.formSubject}</label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      placeholder={t.formSubjectPh}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="message">{t.formMessage}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder={t.formMessagePh}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-send"
                    disabled={sendStatus === "sending"}
                  >
                    {sendStatus === "sending" ? cs.sending : t.formSubmit}
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2 11 13" />
                      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </button>

                  <p
                    className={`form-status form-status--${sendStatus}`}
                    role="status"
                    aria-live="polite"
                  >
                    {sendStatus === "success" && `✓ ${cs.success}`}
                    {sendStatus === "error" && cs.error}
                  </p>
                </form>
              </div>
            </section>
          </>
        )}
      </main>
      <BackToTop lang={lang} />
    </div>
  );
}
