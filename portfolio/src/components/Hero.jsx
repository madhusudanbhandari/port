import portfolioData from "../data/portfolioData";
import { FadeIn, Button, LinkButton } from "./UI";
import { useScrollTo } from "../hooks/index";

const getInitials = (name) => name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export default function Hero({ setHovering }) {
  const scrollTo = useScrollTo();
  const d = portfolioData;

  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 80, position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

        <FadeIn delay={0}>
          {d.isOpenToWork && (
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.1em" }}>Open to opportunities</span>
            </div>
          )}
          <div style={{ display: "inline-block", marginBottom: 8 }}>
            <div style={{ width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), var(--accent2))", padding: 2, position: "relative", display: "inline-block" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0a0a0f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", fontWeight: 800 }}>
                {d.avatar ? <img src={d.avatar} alt={d.name} style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} /> : getInitials(d.name)}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent2)", marginBottom: 8 }}>Hello, World</div>
          <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", background: "linear-gradient(135deg, #fff 30%, var(--accent2) 70%, var(--accent) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {d.name}
          </h1>
          <h2 style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", color: "var(--muted)", fontWeight: 400, marginTop: 8 }}>{d.title}</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ maxWidth: 600, color: "var(--muted)", lineHeight: 1.75, fontSize: "1rem" }}>{d.bio}</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => scrollTo("Contact")} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>✉ Get in Touch</Button>
            <Button variant="outline" onClick={() => scrollTo("Projects")} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>⚡ View Projects</Button>
            {d.resumeUrl && <Button href={d.resumeUrl} target="_blank" variant="outline" style={{ color: "var(--accent2)", borderColor: "var(--accent2)" }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>↓ Resume</Button>}
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
            <LinkButton href={d.github}>⌥ GitHub</LinkButton>
            <LinkButton href={d.linkedin}>⌦ LinkedIn</LinkButton>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 6, padding: "5px 12px" }}>📍 {d.location}</span>
          </div>
        </FadeIn>
      </div>

      <div className="float-anim" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", color: "var(--muted)", fontSize: "0.7rem", fontFamily: "var(--font-mono)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span>scroll</span><span>↓</span>
      </div>
    </section>
  );
}