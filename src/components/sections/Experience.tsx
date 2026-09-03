import { profile } from "../../data/profile";
import { useInView } from "../../hooks/useInView";
import { useLanguage } from "../../i18n/LanguageContext";
import { RevealItem } from "../ui/RevealItem";
import "./Experience.css";

// Hash curta e determinística (não é um hash de commit real — é só o
// vocabulário visual do "git log" aplicado à trajetória cronológica).
function shortHash(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).slice(0, 7).padStart(7, "0");
}

const orderedTimeline = [...profile.timeline].sort((a, b) => a.start - b.start);

export function Experience() {
  const { t } = useLanguage();
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="experiencia"
      ref={ref}
      className={`section reveal${inView ? " reveal-visible" : ""}`}
    >
      <p className="section-eyebrow">{t.experience.eyebrow}</p>
      <h2 className="section-title">{t.experience.title}</h2>

      <ol className="timeline">
        {orderedTimeline.map((item, index) => {
          const copy = t.experience.items[item.id as keyof typeof t.experience.items];

          return (
            <RevealItem key={item.id} delay={(index % 4) * 80}>
              <li className="timeline-item">
                <div className="timeline-rail">
                  <div className="timeline-marker" data-type={item.type} />
                </div>
                <span className="timeline-hash">{shortHash(item.id)}</span>
                <span className="timeline-period">{copy.period}</span>
                <div className="timeline-content">
                  <h3>{copy.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <span
                    className={`timeline-badge timeline-badge-${item.type} timeline-badge-mid`}
                  >
                    {item.type === "experiencia"
                      ? t.experience.badgeExperiencia
                      : t.experience.badgeFormacao}
                  </span>
                  <p className="timeline-description">{copy.description}</p>
                </div>
              </li>
            </RevealItem>
          );
        })}
      </ol>
    </section>
  );
}
