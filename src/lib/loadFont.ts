// Satori needs static TTF files, and Google Fonts only serves Archivo's default
// width that way (a wdth request comes back empty). Condensed text uses Archivo
// Narrow, the static condensed cut of the same family. Used by the OG image and icons.
export async function loadFont(family: string, wght: number, text: string) {
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
