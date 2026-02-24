import portfolioData from "../data/portfolioData";
import { FadeIn, SectionHeader, Card, Badge, Accent } from "./UI";

export default function Skills({ setHovering }) {
  const { skills } = portfolioData;
  return (
    <section id="skills" style={{ paddingTop: 32, marginBottom: 100 }}>
      <FadeIn><SectionHeader label="Skills" title={<>Technical <Accent color="var(--accent)">Arsenal</Accent></>} /></FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {Object.entries(skills).map(([cat, items], i) => (
          <FadeIn key={cat} delay={i * 0.07}>
            <Card onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: 14 }}>{cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map((s) => <Badge key={s} style={{ fontSize: "0.75rem" }}>{s}</Badge>)}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}