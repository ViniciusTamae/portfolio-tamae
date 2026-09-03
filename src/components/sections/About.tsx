import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/LanguageContext";
import { WinBar } from "../ui/WinBar";
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
        <WinBar>{t.about.panelLabel}</WinBar>
        <div className="about-text">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
