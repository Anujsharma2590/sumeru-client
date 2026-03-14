import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0, fontWeight: 700 }}>404</h1>
      <p style={{ fontSize: "1.125rem", color: "#525252", maxWidth: "28rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 1.5rem",
          background: "#f36f23",
          color: "#fff",
          borderRadius: "10px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
