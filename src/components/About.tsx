import { useInView } from "../hooks/useInView";
import { useLanguage } from "../i18n/LanguageContext";
import "./About.css";

export function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="sobre"
      ref={ref}
      className={`section reveal${inView ? " reveal-visible" : ""}`}
    >
      <p className="section-eyebrow">{t.about.eyebrow}</p>
      <h2 className="section-title">{t.about.title}</h2>

      <div className="about-panel card">
        <div className="win-bar">
          <span className="win-dots">
            <span />
            <span />
          </span>
          {t.about.panelLabel}
        </div>
        <div className="about-text">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
