import portfolioData from "../data/portfolioData";
import { FadeIn, SectionHeader, Accent } from "./UI";

export default function Experience() {
  const { experience } = portfolioData;
  return (
    <section id="experience" style={{ paddingTop: 32, marginBottom: 100 }}>
      <FadeIn>
        <SectionHeader label="Experience" title={<>Work <Accent color="var(--accent)">Experience</Accent></>} />
      </FadeIn>
      {experience.length === 0 ? (
        <FadeIn delay={0.1}>
          <div style={{
            padding: "48px 32px", borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: 16 }}>🚀</div>
            <p style={{ color: "var(--muted)", fontSize: "1.1rem", fontFamily: "var(--font-mono)" }}>
              Searching for opportunities
            </p>
          </div>
        </FadeIn>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {experience.map((job, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ padding: 28, borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{job.role}</h3>
                <div style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginTop: 4, marginBottom: 16 }}>{job.company}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--accent2)", flexShrink: 0 }}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}