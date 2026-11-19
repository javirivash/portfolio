import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="jr-wrap jr-seccion">
      <h2>Selected work</h2>

      <div>
        {projects.map((project, projectIndex) => (
          <article key={project.id} className="jr-fila">
            <div className="jr-nivel">
              {project.period && (
                <>
                  <span className="n">{project.period.match(/\d{4}/)?.[0]}</span>
                  <span className="t">{project.period}</span>
                </>
              )}
            </div>

            <div className="jr-info">
              <h3>{project.title}</h3>
              <p className="jr-para">{project.description}</p>

              {project.stats && (
                <div className="jr-cifras">
                  {project.stats.map((stat, statIndex) => (
                    <div key={stat.label} className="jr-cifra">
                      <span className="jr-etq">{stat.label}</span>
                      {/* One highlight per section: the lead figure of the lead project */}
                      <span
                        className={`v ${projectIndex === 0 && statIndex === 0 ? "jr-marca" : ""}`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-sm text-muted">
                {project.stack.join(" · ")}
              </p>

              <details className="jr-detalle">
                <summary>Read the case study</summary>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="grid content-start gap-2">
                    <span className="jr-etq">Context</span>
                    <p className="text-[15px] text-ink-soft">{project.context}</p>
                  </div>
                  <div className="grid content-start gap-2">
                    <span className="jr-etq">Approach</span>
                    <p className="text-[15px] text-ink-soft">{project.approach}</p>
                  </div>
                  <div className="grid content-start gap-2">
                    <span className="jr-etq">Outcome</span>
                    <p className="text-[15px] text-ink-soft">{project.outcome}</p>
                  </div>
                </div>
              </details>

              {(project.liveUrl || project.githubUrl) && (
                <div className="jr-acciones">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jr-btn sec"
                    >
                      View live site <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jr-btn sec"
                    >
                      View code on GitHub <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
