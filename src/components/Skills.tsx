import { profile } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";
import "./Skills.css";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <p className="section-eyebrow">{t.skills.eyebrow}</p>
      <h2 className="section-title">{t.skills.title}</h2>

      <div className="skills-grid">
        {profile.skills.map((skill) => (
          <span key={skill} className="tag skill-tag">
            <span className="skill-tag-prefix">#</span>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
