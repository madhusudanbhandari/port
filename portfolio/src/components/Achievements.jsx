import portfolioData from "../data/portfolioData";
import { FadeIn, SectionHeader, Card, Accent } from "./UI";

export default function Achievements({ setHovering }) {
  const { achievements } = portfolioData;
  return (
    <section id="achievements" style={{ paddingTop: 32, marginBottom: 100 }}>
      <FadeIn><SectionHeader label="Achievements" title={<>Recognition & <Accent>Impact</Accent></>} /></FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
        {achievements.map((a, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <Card style={{ textAlign: "center" }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>{a.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{a.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.86rem", lineHeight: 1.6 }}>{a.desc}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}