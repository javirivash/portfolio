import Image from "next/image";

export default function Resume() {
  return (
    <section id="resume" className="jr-wrap jr-seccion">
      <h2>Resume</h2>

      <div className="jr-acciones">
        <a
          href="/resume.pdf"
          download="Javier Rivas - Frontend & Full-Stack Engineer.pdf"
          className="jr-btn"
        >
          Download PDF <span aria-hidden="true">&darr;</span>
        </a>
        <span className="jr-nota">One page, PDF</span>
      </div>

      <p className="sr-only">
        Javier Rivas&apos;s resume is displayed as an image below. Use the
        Download PDF button above to save an accessible copy.
      </p>
      <div className="max-w-[820px] border border-rule bg-white">
        <Image
          src="/resume.png"
          alt="Javier Rivas — Resume"
          width={2550}
          height={3300}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
