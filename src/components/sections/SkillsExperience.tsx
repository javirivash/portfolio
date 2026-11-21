import Period from "@/components/ui/Period";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export default function SkillsExperience() {
  return (
    <section id="experience" className="jr-wrap jr-seccion">
      <h2>Experience</h2>

      <ol className="m-0 list-none p-0">
        {experience.map((job) => (
          <li key={job.company} className="jr-fila">
            <Period period={job.period} />
            <div className="jr-info gap-3">
              {job.roles.length === 1 && (
                <span className="jr-etq">{job.roles[0].title}</span>
              )}
              <h3>{job.company}</h3>
              {job.roles.length === 1 ? (
                <p className="jr-para">{job.roles[0].description}</p>
              ) : (
                <ol className="jr-puestos">
                  {job.roles.map((role) => (
                    <li key={role.title}>
                      <h4>{role.title}</h4>
                      <span className="jr-etq">{role.period}</span>
                      <p className="jr-para">{role.description}</p>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-6 pt-6">
        <span className="jr-etq">Toolkit</span>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category) => (
            <div key={category.category} className="grid content-start gap-2">
              <h3 className="m-0 text-[19px] font-extrabold">
                {category.category}
              </h3>
              <ul className="jr-lista" style={{ columns: 1 }}>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
