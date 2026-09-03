import { profile } from "../../data/profile";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/LanguageContext";
import { LinkedinIcon, MailIcon, WhatsappIcon } from "../ui/icons";
import { WinBar } from "../ui/WinBar";
import "./Contact.css";

export function Contact() {
  const { t } = useLanguage();
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="contato"
      ref={ref}
      className={`section reveal${inView ? " reveal-visible" : ""}`}
    >
      <p className="section-eyebrow contact-eyebrow">{t.contact.eyebrow}</p>
      <h2 className="section-title contact-title">{t.contact.title}</h2>

      <div className="contact-panel card">
        <WinBar>{t.contact.panelLabel}</WinBar>
        <div className="contact-body">
          <p className="contact-text">{t.contact.text}</p>

          <div className="contact-output">
            <a href={`mailto:${profile.email}`} className="contact-line">
              <span className="contact-line-prefix">&gt;</span>
              <MailIcon /> {profile.email}
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="contact-line"
            >
              <span className="contact-line-prefix">&gt;</span>
              <WhatsappIcon /> WhatsApp
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
          </div>

          <a href={`mailto:${profile.email}`} className="btn btn-primary contact-cta">
            {t.contact.ctaEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
