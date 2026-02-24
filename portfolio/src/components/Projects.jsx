import portfolioData from "../data/portfolioData";
import { FadeIn, SectionHeader, Card, Badge, LinkButton, Accent } from "./UI";

export default function Projects({ setHovering }) {
  const { projects } = portfolioData;
  return (
    <section id="projects" style={{ paddingTop: 32, marginBottom: 100 }}>
      <FadeIn><SectionHeader label="Projects" title={<>What I've <Accent>Built</Accent></>} /></FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <Card highlight={p.highlight} style={{ height: "100%", display: "flex", flexDirection: "column" }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              {p.highlight && (
                <div style={{ position: "absolute", top: 16, right: 16, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", background: "linear-gradient(90deg, var(--accent), var(--accent2))", color: "#fff", padding: "3px 10px", borderRadius: 20 }}>⭐ Featured</div>
              )}
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {p.tech.map((t) => <Badge key={t} style={{ fontSize: "0.72rem" }}>{t}</Badge>)}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {p.github && <LinkButton href={p.github}>⌥ Code</LinkButton>}
                {p.live   && <LinkButton href={p.live}>↗ Live</LinkButton>}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
