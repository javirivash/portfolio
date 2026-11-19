export default function Footer() {
  return (
    <footer className="jr-wrap">
      <div className="mt-16 flex flex-col gap-2 border-t-2 border-ink py-8 text-[13px] text-muted sm:flex-row sm:items-baseline sm:justify-between">
        <p>
          <b className="font-extrabold text-ink">Javier Rivas</b> · Frontend
          &amp; Full-Stack Engineer · Remote from Mexico
        </p>
        <p>&copy; {new Date().getFullYear()} · Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
