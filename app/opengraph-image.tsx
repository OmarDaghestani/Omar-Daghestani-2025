import { ImageResponse } from "next/og";

// Edge runtime: Next 14's Node renderer fails on Windows file paths ("Invalid URL").
export const runtime = "edge";
export const alt = "Omar Daghestani — AI & Automation Engineer, Founder of Nexus Code";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toDataUri = (buffer: ArrayBuffer, type: string) =>
  `data:${type};base64,${btoa(
    new Uint8Array(buffer).reduce((acc, byte) => acc + String.fromCharCode(byte), "")
  )}`;

// Social preview card (LinkedIn, Slack, iMessage, X), matching the site's dark teal theme.
export default async function OpengraphImage() {
  const avatar = await fetch(new URL("../public/og-avatar.jpg", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "#070B14",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(45,212,191,0.22), transparent 45%), radial-gradient(circle at 10% 100%, rgba(99,102,241,0.18), transparent 45%)",
          color: "#F1F5F9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", fontSize: 19, letterSpacing: 3, color: "#2DD4BF" }}>
            AI & AUTOMATION ENGINEER · FOUNDER, NEXUS CODE
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>
            Omar Daghestani
          </div>
          <div style={{ display: "flex", fontSize: 34, lineHeight: 1.25, color: "#CBD5E1" }}>
            I build AI-powered systems that run real businesses.
          </div>
          <div style={{ display: "flex", gap: 18, marginTop: 12 }}>
            {[
              ["30", "production systems"],
              ["10+", "Claude workflows"],
              ["2,400+", "merged PRs"],
            ].map(([value, label]) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: "1px solid rgba(148,163,184,0.25)",
                  background: "rgba(15,23,42,0.6)",
                }}
              >
                <span style={{ fontSize: 34, fontWeight: 700 }}>{value}</span>
                <span style={{ fontSize: 18, color: "#94A3B8" }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#94A3B8", marginTop: 6 }}>
            omar-daghestani.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: 8,
            borderRadius: 9999,
            backgroundImage: "linear-gradient(135deg, #2DD4BF, #38BDF8, #6366F1)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={toDataUri(avatar, "image/jpeg")}
            width={300}
            height={300}
            alt=""
            style={{ borderRadius: 9999, border: "6px solid #070B14" }}
          />
        </div>
      </div>
    ),
    size
  );
}
