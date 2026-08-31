import { useLanguage } from "../i18n/LanguageContext";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import "./Header.css";

export function Header() {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#skills", label: t.nav.skills },
    { href: "#experiencia", label: t.nav.experiencia },
    { href: "#hackathon", label: t.nav.hackathon },
    { href: "#projetos", label: t.nav.projetos },
    { href: "#contato", label: t.nav.contato },
  ];

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#topo" className="brand">
          vinicius<span className="brand-dot">.</span>dev
        </a>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              className={lang === "pt" ? "lang-btn lang-btn-active" : "lang-btn"}
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
            >
              PT
            </button>
            <button
              type="button"
              className={lang === "en" ? "lang-btn lang-btn-active" : "lang-btn"}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <div className="social-icons">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label={t.common.github}>
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={t.common.linkedin}
            >
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label={t.common.email}>
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
