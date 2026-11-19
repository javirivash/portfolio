import { ImageResponse } from "next/og";
import { loadFont } from "@/lib/loadFont";

// Favicon and Apple touch icon: "JR" in Archivo Narrow on the blue accent,
// square corners like the rest of the design system.
export async function brandIcon(px: number) {
  let fonts: { name: string; data: ArrayBuffer; weight: 700 }[] = [];
  try {
    fonts = [{ name: "Archivo Narrow", data: await loadFont("Archivo Narrow", 700, "JR"), weight: 700 }];
  } catch (error) {
    // Fall back to the default font rather than failing the build
    console.warn("brandIcon: using the default font.", error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a62d0",
          color: "#fafaf7",
          fontFamily: "Archivo Narrow",
          fontWeight: 700,
          fontSize: Math.round(px * 0.68),
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        JR
      </div>
    ),
    fonts.length ? { width: px, height: px, fonts } : { width: px, height: px },
  );
}
