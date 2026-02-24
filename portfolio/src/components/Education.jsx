import portfolioData from "../data/portfolioData";
import { FadeIn, SectionHeader, Card, Badge, Accent } from "./UI";

export default function Education({ setHovering }) {
  const { education } = portfolioData;
  return (
    <section id="education" style={{ paddingTop: 32, marginBottom: 100 }}>
      <FadeIn><SectionHeader label="Education" title={<>Academic <Accent>Background</Accent></>} /></FadeIn>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {education.map((edu, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <Card onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 12px var(--accent)", marginTop: 6 }} />
                  {i < education.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 40, background: "var(--border)", margin: "6px 0" }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{edu.institution}</h3>
                      <div style={{ color: "var(--accent2)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginTop: 4 }}>{edu.degree}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Badge>{edu.period}</Badge>
                      {edu.gpa && <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)", marginTop: 6 }}>GPA: <span style={{ color: "var(--accent2)" }}>{edu.gpa}</span></div>}
                    </div>
                  </div>
                  {edu.notes && <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>{edu.notes}</p>}
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}