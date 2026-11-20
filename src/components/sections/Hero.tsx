export default function Hero() {
  return (
    <header className="jr-wrap">
      <div className="grid grid-cols-1 items-end gap-5 pb-10 pt-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-10 md:pb-14 md:pt-12">
        <div>
          <p className="jr-etq mb-4">Frontend &amp; Full-Stack Engineer</p>
          <h1 className="m-0 text-[clamp(64px,12vw,148px)] font-extrabold uppercase leading-[0.86] tracking-[-0.02em] [font-stretch:72%]">
            Javier
            <br />
            <span className="jr-marca">Rivas</span>
          </h1>
        </div>

        <div className="grid gap-4">
          <p className="max-w-[42ch] text-[19px] leading-normal text-ink-soft">
            I build accessible interfaces with React, TypeScript and
            Next.js. Four years shipping product UI at DataRobot, and today I
            design, build and run a live booking and payments platform on my
            own.
          </p>
          <p className="text-sm text-muted">
            <b className="font-bold text-ink">Open to remote roles</b> · Based
            in Mexico
          </p>
          <div className="jr-acciones mt-2">
            <a href="#projects" className="jr-btn">
              View work <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="mailto:javirivas14@gmail.com" className="jr-btn sec">
              Email me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
