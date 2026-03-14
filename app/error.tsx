"use client";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorPageProps) {
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
      <h1 style={{ fontSize: "2rem", margin: 0, fontWeight: 700 }}>
        Something went wrong
      </h1>
      <p style={{ fontSize: "1.125rem", color: "#525252", maxWidth: "28rem" }}>
        An unexpected error occurred. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        style={{
          marginTop: "0.5rem",
          padding: "0.75rem 1.5rem",
          background: "#f36f23",
          color: "#fff",
          borderRadius: "10px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Try Again
      </button>
    </main>
  );
}
