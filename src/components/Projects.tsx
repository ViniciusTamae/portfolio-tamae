import bingoOnlineScreenshot from "../assets/repo-bingo-online-cover.png";
import { profile } from "../data/profile";
import { featuredProjects } from "../data/projects";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { useInView } from "../hooks/useInView";
import { useLanguage } from "../i18n/LanguageContext";
import { CodeIcon, ExternalLinkIcon, GithubIcon, StarIcon } from "./icons";
import { RevealItem } from "./RevealItem";
import "./Projects.css";

// Capturas de tela para repositórios específicos, buscadas por nome do repo.
const repoScreenshots: Record<string, string[]> = {
  "bingo-online": [bingoOnlineScreenshot],
};

export function Projects() {
  const { repos, loading, error } = useGithubRepos();
  const { t } = useLanguage();
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section
      id="projetos"
      ref={ref}
      className={`section reveal${inView ? " reveal-visible" : ""}`}
    >
      <p className="section-eyebrow">{t.projects.eyebrow}</p>
      <h2 className="section-title">{t.projects.title}</h2>

      <h3 className="projects-subtitle">
        <span className="projects-subtitle-prompt">$</span> {t.projects.featuredLabel}
      </h3>
      <div className="featured-grid">
        {featuredProjects.map((project, index) => {
          const copy = t.projects.featured[project.id as keyof typeof t.projects.featured];

          return (
            <RevealItem key={project.id} delay={(index % 4) * 80}>
              <article className="card featured-card">
                <h3>{copy.name}</h3>
                <p>{copy.description}</p>
                <div className="featured-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag tag-small">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </RevealItem>
          );
        })}
      </div>

      <h3 className="projects-subtitle projects-subtitle-repos">
        <span className="projects-subtitle-prompt">$</span> {t.projects.reposLabelPrefix}
        {profile.githubUser}
        {t.projects.reposLabelSuffix}
      </h3>

      {loading && <p className="projects-status">{t.projects.loading}</p>}

      {error && (
        <p className="projects-status">
          {t.projects.errorText}{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            {t.projects.errorLink}
          </a>
          .
        </p>
      )}

      {!loading && !error && repos.length === 0 && (
        <p className="projects-status">{t.projects.noRepos}</p>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="repo-grid">
          {repos.map((repo, index) => {
            const screenshots = repoScreenshots[repo.name];

            return (
              <RevealItem key={repo.id} delay={(index % 4) * 80}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="card repo-card"
                >
                  {screenshots ? (
                    <div className="repo-card-gallery" data-count={screenshots.length}>
                      {screenshots.map((src, screenshotIndex) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${t.projects.screenshotAlt} ${screenshotIndex + 1} — ${repo.name}`}
                          className="repo-card-image"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="repo-card-placeholder">
                      <CodeIcon />
                      <span>{t.projects.noPreview}</span>
                    </div>
                  )}
                  <div className="repo-card-body">
                    <div className="repo-card-header">
                      <span className="repo-card-name">
                        <GithubIcon /> {repo.name}
                      </span>
                      <ExternalLinkIcon />
                    </div>
                    <p className="repo-card-description">
                      {repo.description ?? t.projects.noDescription}
                    </p>
                    <div className="repo-card-footer">
                      {repo.language && <span className="tag tag-small">{repo.language}</span>}
                      <span className="repo-card-stars">
                        <StarIcon /> {repo.stargazers_count}
                      </span>
                    </div>
                  </div>
                </a>
              </RevealItem>
            );
          })}
        </div>
      )}
    </section>
  );
}
