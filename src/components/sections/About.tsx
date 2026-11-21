import Image from "next/image";

const expertise = [
  "React architecture",
  "TypeScript",
  "Next.js App Router",
  "Design systems",
  "Testing (Cypress, Jest, Vitest)",
  "Accessibility",
  "Postgres and Supabase",
  "Payments with Stripe",
];

export default function About() {
  return (
    <section id="about" className="jr-wrap jr-seccion">
      <h2>About</h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid content-start gap-5 text-[17px] text-ink-soft">
          <p className="max-w-[60ch]">
            I&apos;m a frontend engineer with 5+ years building accessible user
            interfaces with React and TypeScript. My work covers design
            systems, structured release cycles and testing.
          </p>
          <p className="max-w-[60ch]">
            At DataRobot, I progressed from Associate to Frontend Engineer II,
            owning feature projects end to end: planning and technical specs,
            testing and stakeholder sign-off.
          </p>
          <p className="max-w-[60ch]">
            Today I design, build and run a full-stack booking and payments
            platform for Organic Nails, a training studio in Mexico, as its
            sole developer, using Next.js, Supabase and Stripe. I work remotely
            from Mexico.
          </p>
          <p className="max-w-[60ch]">
            I studied Industrial Engineering at Tecnológico de Monterrey.
          </p>

          <div className="mt-2 grid gap-3">
            <span className="jr-etq">Core expertise</span>
            <ul className="jr-lista text-ink">
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[280px]">
          <Image
            src="/portrait.jpg"
            alt="Portrait of Javier Rivas, Frontend & Full-Stack Engineer"
            fill
            className="object-cover"
            sizes="280px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
