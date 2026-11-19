import { ImageResponse } from "next/og";

export const alt = "Javier Rivas — Frontend & Full-Stack Engineer, remote from Mexico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori can't use the variable width axis, so fetch static Archivo instances
// (condensed for the name, normal width for text) as TTF at build time.
async function loadArchivo(wdth: number, wght: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@${wdth},${wght}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!src) throw new Error(`Archivo font not found in: ${css.slice(0, 300)}`);
  return (await fetch(src[1])).arrayBuffer();
}

const NAME = "JAVIER RIVAS";
const ROLE = "Frontend & Full-Stack Engineer";
const META = "Remote from Mexico · Open to remote roles";
const SITE = "javirivash.dev";

export default async function Image() {
  let fonts: { name: string; data: ArrayBuffer; weight: 400 | 700 | 900 }[] = [];
  try {
    fonts = [
      { name: "ArchivoCondensed", data: await loadArchivo(62, 900, NAME), weight: 900 },
      { name: "Archivo", data: await loadArchivo(100, 700, `Javier Rivas${ROLE}${SITE}`), weight: 700 },
      { name: "Archivo", data: await loadArchivo(100, 400, `${META}${SITE}`), weight: 400 },
    ];
  } catch (error) {
    // Fall back to the default font rather than failing the build
    console.warn("opengraph-image: using the default font.", error);
    fonts = [];
  }

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
            <span style={{ fontWeight: 700 }}>Javier Rivas</span>
            <span style={{ color: "#64615b", fontWeight: 400 }}>{SITE}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "ArchivoCondensed",
                fontWeight: 900,
                fontSize: 168,
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
