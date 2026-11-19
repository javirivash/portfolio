export default function Contact() {
  return (
    <section id="contact" className="jr-wrap">
      <div className="jr-contacto">
        <span className="jr-etq" style={{ color: "var(--on-azul)" }}>
          Open to remote roles · Based in Mexico
        </span>
        <h2>Let&apos;s work together</h2>
        <p>
          I&apos;m looking for a senior frontend or full-stack role on a
          product team. Email is the fastest way to reach me.
        </p>
        <div className="jr-acciones">
          <a href="mailto:javirivas14@gmail.com" className="jr-btn">
            Email me <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="https://linkedin.com/in/javirivash"
            target="_blank"
            rel="noopener noreferrer"
            className="jr-btn sec"
          >
            LinkedIn <span aria-hidden="true">&#8599;</span>
          </a>
          <a
            href="https://github.com/javirivash"
            target="_blank"
            rel="noopener noreferrer"
            className="jr-btn sec"
          >
            GitHub <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <p className="mt-2">
          <span className="dato">javirivas14@gmail.com</span>
        </p>
      </div>
    </section>
  );
}
