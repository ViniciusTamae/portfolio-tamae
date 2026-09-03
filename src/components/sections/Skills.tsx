import { profile } from "../../data/profile";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/LanguageContext";
import { RevealItem } from "../ui/RevealItem";
import { WinBar } from "../ui/WinBar";
import "./Skills.css";

// As ferramentas de orquestração de agentes — o que mais diferencia o
// perfil — recebem o destaque âmbar em vez de ficarem visualmente iguais
// a todo o resto da stack.
const HIGHLIGHTED_SKILLS = new Set(["LangChain", "LangGraph", "RAG", "Claude / Anthropic API"]);

export function Skills() {
  const { t } = useLanguage();
  const [ref, inView] = useInView<HTMLElement>();
  const lastIndex = profile.skillGroups.length - 1;

  return (
    <section
      id="skills"
      ref={ref}
      className={`section reveal${inView ? " reveal-visible" : ""}`}
    >
      <p className="section-eyebrow">{t.skills.eyebrow}</p>
      <h2 className="section-title">{t.skills.title}</h2>

      <div className="card skills-panel">
        <WinBar>stack.tree</WinBar>

        <ul className="skills-tree">
          {profile.skillGroups.map((group, groupIndex) => {
            const label = t.skills.categories[group.id as keyof typeof t.skills.categories];

            return (
              <RevealItem key={group.id} delay={(groupIndex % 4) * 50}>
                <li className="skills-row">
                  <span className="skills-row-connector" aria-hidden="true">
                    {groupIndex === lastIndex ? "└─" : "├─"}
                  </span>
                  <span className="skills-row-label">{label}</span>
                  <span className="skills-row-tags">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className={`tag tag-small skill-tag${
                          HIGHLIGHTED_SKILLS.has(skill) ? " skill-tag-highlight" : ""
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </span>
                </li>
              </RevealItem>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
