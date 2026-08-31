import operatorPhoto from "../assets/operator.png";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import { AgentTrace } from "./AgentTrace";
import "./Hero.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="topo" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-prompt">{t.hero.prompt}</p>
          <h1>
            <span className="sr-only">{profile.name}</span>
            <span className="hero-name" aria-hidden="true">
              {profile.name.split("").map((char, index) => (
                <span key={index} className="hero-name-letter">
                  {char === " " ? " " : char}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-role">
            <span className="hero-status" aria-hidden="true" />
            {t.hero.role}
          </p>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <p className="hero-summary">{t.hero.summary}</p>

          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">
              {t.hero.ctaProjects}
            </a>
            <a href="#contato" className="btn btn-ghost">
              {t.hero.ctaContact}
            </a>
            <a href={profile.resumeFile} className="btn btn-ghost" download>
              {t.hero.ctaResume}
            </a>
          </div>
        </div>

        <div className="hero-panels">
          <div className="card operator-panel">
            <div className="win-bar">
              <span className="win-dots">
                <span />
                <span />
              </span>
              operator.png
            </div>
            <img src={operatorPhoto} alt={profile.name} className="operator-photo" />
          </div>

          <AgentTrace />
        </div>
      </div>
    </section>
  );
}
