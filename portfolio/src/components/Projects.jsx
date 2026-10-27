
import portfolioData from "../data/portfolioData";
import {
  FadeIn,
  SectionHeader,
  Card,
  Badge,
  LinkButton,
  Accent,
} from "./UI";

export default function Projects({ setHovering }) {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section">
      <FadeIn>
        <SectionHeader
          label="Projects"
          title={
            <>
              What I've <Accent>Built</Accent>
            </>
          }
        />
      </FadeIn>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <FadeIn
            key={project.title ?? index}
            delay={Math.min(index * 0.06, 0.24)}
            className="project-item"
          >
            <Card
              highlight={project.highlight}
              className="project-card"
              onMouseEnter={() => setHovering?.(true)}
              onMouseLeave={() => setHovering?.(false)}
            >
              <div className="project-content">
                <div className="project-heading">
                  <h3>{project.title}</h3>

                  {project.highlight && (
                    <span className="project-featured">
                      Featured
                    </span>
                  )}
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div
                  className="project-tech"
                  aria-label="Technologies used"
                >
                  {project.tech.map((technology) => (
                    <Badge key={technology}>
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>

              {(project.github || project.live) && (
                <div className="project-actions">
                  {project.github && (
                    <LinkButton href={project.github}>
                      View Code
                    </LinkButton>
                  )}

                  {project.live && (
                    <LinkButton href={project.live}>
                      Live Demo
                    </LinkButton>
                  )}
                </div>
              )}
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
