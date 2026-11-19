import { ImageResponse } from "next/og";

export const alt = "Javier Rivas — Frontend & Full-Stack Engineer, remote from Mexico. React, Next.js and TypeScript.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori needs static TTF files, and Google Fonts only serves Archivo's default
// width that way (a wdth request comes back empty). So the name uses Archivo
// Narrow, the static condensed cut of the same family.
async function loadFont(family: string, wght: number, text: string) {
  const base = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${wght}`;
  const candidates = [`${base}&text=${encodeURIComponent(text)}`, base, `${base}&display=swap`];
  const tried: string[] = [];
  for (const url of candidates) {
    const res = await fetch(url, { cache: "force-cache" });
    const css = await res.text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (res.ok && src) {
      const font = await fetch(src[1], { cache: "force-cache" });
      if (font.ok) return font.arrayBuffer();
      tried.push(`${url} -> font ${font.status}`);
      continue;
    }
    tried.push(`${url} -> ${res.status} ${css.slice(0, 120).replace(/\s+/g, " ")}`);
  }
  throw new Error(`${family} ${wght} not loaded:\n${tried.join("\n")}`);
}

const NAME = "JAVIER RIVAS";
const ROLE = "Frontend & Full-Stack Engineer";
const META = "Remote from Mexico · React · Next.js · TypeScript";
const LABEL = "PORTFOLIO";
const SITE = "javirivash.dev";

export default async function Image() {
  // Load each instance on its own so one failed request doesn't drop the others.
  const wanted = [
    { name: "Archivo Narrow", weight: 700, text: NAME },
    { name: "Archivo", weight: 700, text: `${ROLE}${SITE}` },
    { name: "Archivo", weight: 400, text: `${META}${LABEL}` },
  ] as const;
  const results = await Promise.allSettled(wanted.map((f) => loadFont(f.name, f.weight, f.text)));
  const fonts = results.flatMap((r, i) => {
    if (r.status === "fulfilled") return [{ name: wanted[i].name, data: r.value, weight: wanted[i].weight }];
    // Fall back to the default font rather than failing the build
    console.warn("opengraph-image: using the default font.", r.reason);
    return [];
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fafaf7",
          color: "#151413",
          fontFamily: "Archivo",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: 16,
              borderBottom: "3px solid #151413",
              fontSize: 26,
            }}
          >
            <span style={{ fontWeight: 700 }}>{SITE}</span>
            <span style={{ color: "#64615b", fontWeight: 400, fontSize: 20, letterSpacing: "0.12em" }}>
              {LABEL}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Archivo Narrow",
                fontWeight: 700,
                fontSize: 148,
                lineHeight: 0.86,
                letterSpacing: "-0.02em",
              }}
            >
              <span>JAVIER&nbsp;</span>
              {/* Marcatextos behind the surname */}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(transparent 58%, #b9dcff 58%, #b9dcff 92%, transparent 92%)",
                }}
              >
                RIVAS
              </span>
            </div>
            <div style={{ marginTop: 28, fontSize: 44, fontWeight: 700 }}>{ROLE}</div>
            <div style={{ marginTop: 10, fontSize: 28, color: "#64615b", fontWeight: 400 }}>
              {META}
            </div>
          </div>
        </div>

        {/* The one accent: a blue slab on the right edge */}
        <div style={{ width: 120, background: "#0a62d0" }} />
      </div>
    ),
    fonts.length ? { ...size, fonts } : size,
  );
}
