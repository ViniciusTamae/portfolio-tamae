import photoAvaliacao from "../assets/hackathon-avaliacao.jpg";
import photoEquipe from "../assets/hackathon-equipe.jpg";
import { hackathon } from "../data/hackathon";
import { useLanguage } from "../i18n/LanguageContext";
import "./Hackathon.css";

export function Hackathon() {
  const { t } = useLanguage();

  const photos = [
    {
      src: photoAvaliacao,
      file: "avaliacao.jpg",
      alt: t.hackathon.photos.avaliacao,
      position: "50% 15%",
    },
    {
      src: photoEquipe,
      file: "equipe-pedbot.jpg",
      alt: t.hackathon.photos.equipe,
      position: "center",
    },
  ];

  return (
    <section id="hackathon" className="section">
      <p className="section-eyebrow hackathon-eyebrow">{t.hackathon.eyebrow}</p>
      <h2 className="section-title hackathon-title">{hackathon.eventName}</h2>

      <div className="hackathon-panel card">
        <div className="win-bar">
          <span className="win-dots">
            <span />
            <span />
          </span>
          {t.hackathon.panelLabel}
        </div>
        <div className="hackathon-body">
          <div className="hackathon-tags">
            <span className="tag">{t.hackathon.edition}</span>
            <span className="tag">{t.hackathon.role}</span>
            <span className="tag">{hackathon.partner}</span>
          </div>
          {t.hackathon.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="hackathon-gallery">
        {photos.map((photo) => (
          <figure key={photo.file} className="card hackathon-photo-card">
            <div className="win-bar">
              <span className="win-dots">
                <span />
                <span />
              </span>
              {photo.file}
            </div>
            <img
              src={photo.src}
              alt={photo.alt}
              className="hackathon-photo"
              style={{ objectPosition: photo.position }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
