import portfolioData from "../data/portfolioData";

export default function Footer() {
  const { name } = portfolioData;
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: 24, textAlign: "center", position: "relative", zIndex: 1 }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.06em" }}>
        Designed & Built by <span style={{ color: "var(--accent2)" }}>{name}</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}