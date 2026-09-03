import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "../ui/icons";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-line">
          <span className="footer-line-prefix">$</span> echo "© {year} {profile.name}" &amp;&amp;
          exit 0
        </p>
        <div className="social-icons">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <WhatsappIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-mail">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
