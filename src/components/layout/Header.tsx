import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { profile } from "../../data/profile";
import { CloseIcon, GithubIcon, LinkedinIcon, MailIcon, MenuIcon, WhatsappIcon } from "../ui/icons";
import { WinBar } from "../ui/WinBar";
import "./Header.css";

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#skills", label: t.nav.skills },
    { href: "#experiencia", label: t.nav.experiencia },
    { href: "#hackathon", label: t.nav.hackathon },
    { href: "#projetos", label: t.nav.projetos },
    { href: "#contato", label: t.nav.contato },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const LangSwitch = (
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
  );

  const SocialIcons = (
    <div className="social-icons">
      <a href={profile.github} target="_blank" rel="noreferrer" aria-label={t.common.github}>
        <GithubIcon />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={t.common.linkedin}>
        <LinkedinIcon />
      </a>
      <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsappIcon />
      </a>
      <a href={`mailto:${profile.email}`} aria-label={t.common.email}>
        <MailIcon />
      </a>
    </div>
  );

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
          {LangSwitch}
          {SocialIcons}

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {createPortal(
        <>
          {/* Renderizado via portal, direto em <body>: o header tem
              backdrop-filter, que cria um novo "containing block" pra
              descendentes position:fixed — travaria o drawer dentro dos
              64px do header em vez do viewport inteiro se ficasse aninhado
              ali dentro. */}
          <div
            className={`menu-backdrop${menuOpen ? " menu-backdrop-open" : ""}`}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            className={`menu-drawer${menuOpen ? " menu-drawer-open" : ""}`}
            role="dialog"
            aria-label="Menu de navegação"
            aria-hidden={!menuOpen}
          >
            <WinBar className="menu-drawer-bar">menu.sh</WinBar>

            <nav className="menu-drawer-nav">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  <span className="menu-drawer-nav-prefix">$</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="menu-drawer-footer">
              {LangSwitch}
              {SocialIcons}
            </div>
          </div>
        </>,
        document.body,
      )}
    </header>
  );
}
