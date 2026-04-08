import Link from "next/link";
import AuranMark from "./components/AuranMark";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-8 py-16"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <AuranMark size={240} />

      <p
        className="mt-12 text-xs"
        style={{
          color: "#e8e0d4",
          opacity: 0.5,
          fontFamily: "'IBM Plex Mono', monospace",
          letterSpacing: "0.25em",
        }}
      >
        in the clearing
      </p>

      <div
        className="mt-20"
        style={{
          width: "40px",
          height: "1px",
          backgroundColor: "#2a2a2a",
        }}
      />

      <Link
        href="/joga"
        className="mt-12 text-xl opacity-60 hover:opacity-100 transition-opacity duration-700"
        style={{
          color: "#e8e0d4",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        jóga
      </Link>
    </main>
  );
}
