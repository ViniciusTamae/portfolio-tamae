import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import "./Contact.css";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="section">
      <p className="section-eyebrow contact-eyebrow">{t.contact.eyebrow}</p>
      <h2 className="section-title contact-title">{t.contact.title}</h2>

      <div className="contact-panel card">
        <div className="win-bar">
          <span className="win-dots">
            <span />
            <span />
          </span>
          {t.contact.panelLabel}
        </div>
        <div className="contact-body">
          <p className="contact-text">{t.contact.text}</p>

          <div className="contact-output">
            <a href={`mailto:${profile.email}`} className="contact-line">
              <span className="contact-line-prefix">&gt;</span>
              <MailIcon /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-line"
            >
              <span className="contact-line-prefix">&gt;</span>
              <LinkedinIcon /> linkedin.com/in/vinicius-tamae
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-line">
              <span className="contact-line-prefix">&gt;</span>
              <GithubIcon /> github.com/{profile.githubUser}
            </a>
          </div>

          <a href={`mailto:${profile.email}`} className="btn btn-primary contact-cta">
            {t.contact.ctaEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
