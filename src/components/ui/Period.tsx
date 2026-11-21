// The left column of a row: the start year large, and only the end of the
// range below it ("to 2025", "to present"), so no year is printed twice.
export default function Period({ period }: { period?: string }) {
  if (!period) return <div className="jr-nivel" />;

  const [start, end] = period.split(/\s*[–-]\s*/);
  const year = start.match(/\d{4}/)?.[0] ?? start;

  return (
    <div className="jr-nivel">
      <span className="n">{year}</span>
      {end && <span className="t">to {end}</span>}
      <span className="sr-only">{period}</span>
    </div>
  );
}
