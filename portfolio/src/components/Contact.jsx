import portfolioData from "../data/portfolioData";
import { FadeIn, SectionHeader, Card, Button, Accent } from "./UI";

export default function Contact({ setHovering }) {
  const d = portfolioData;
  return (
    <section id="contact" style={{ paddingTop: 32, marginBottom: 120 }}>
      <FadeIn>
        <SectionHeader label="Contact" title={<>Let's <Accent>Connect</Accent></>} />
        <p style={{ color: "var(--muted)", marginBottom: 40, maxWidth: 500, lineHeight: 1.7 }}>
          I'm always open to discussing internship opportunities, collaborative projects, or just a good tech conversation.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Card style={{ maxWidth: 560 }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <ContactRow icon="✉" label="Email"    value={d.email}    href={`mailto:${d.email}`} />
            <div style={{ height: 1, background: "var(--border)" }} />
            <ContactRow icon="⌥" label="GitHub"   value={d.github}   href={d.github} />
            <div style={{ height: 1, background: "var(--border)" }} />
            <ContactRow icon="⌦" label="LinkedIn" value={d.linkedin} href={d.linkedin} />
            <div style={{ height: 1, background: "var(--border)" }} />
            <ContactRow icon="📍" label="Location" value={d.location} />
          </div>
          <div style={{ marginTop: 28 }}>
            <Button href={`mailto:${d.email}`} variant="primary" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>✉ Say Hello →</Button>
          </div>
        </Card>
      </FadeIn>
    </section>
  );
}

function ContactRow({ icon, label, value, href }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 2 }}>{label}</div>
        {href
          ? <a href={href} target="_blank" rel="noreferrer" style={{ color: "var(--text)", fontSize: "0.92rem", fontWeight: 500, textDecoration: "none" }} onMouseOver={e => e.currentTarget.style.color = "var(--accent2)"} onMouseOut={e => e.currentTarget.style.color = "var(--text)"}>{value}</a>
          : <span style={{ color: "var(--text)", fontSize: "0.92rem", fontWeight: 500 }}>{value}</span>
        }
      </div>
    </div>
  );
}