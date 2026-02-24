import { useRef } from "react";
import { useInView } from "../hooks/index";

export function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const ref     = useRef(null);
  const visible = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em",
        textTransform: "uppercase", color: "var(--accent2)", marginBottom: 10,
      }}>
        {label}
      </div>
      <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
        {title}
      </h2>
    </div>
  );
}

export function Badge({ children, style = {} }) {
  return (
    <span style={{
      display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "0.7rem",
      padding: "3px 10px", borderRadius: 20, border: "1px solid var(--border)",
      background: "var(--card)", color: "var(--muted)", letterSpacing: "0.05em",
      whiteSpace: "nowrap", ...style,
    }}>
      {children}
    </span>
  );
}

export function Card({ children, highlight = false, style = {}, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        background:   highlight ? "rgba(6,182,212,0.04)" : "var(--card)",
        border:       highlight ? "1px solid rgba(6,182,212,0.3)" : "1px solid var(--border)",
        borderRadius: 16, padding: 28, position: "relative", overflow: "hidden",
        transition:   "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        boxShadow:    highlight ? "0 0 40px rgba(6,182,212,0.08)" : "none",
        ...style,
      }}
    >
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", borderRadius: "inherit",
        background: "linear-gradient(135deg, rgba(124,58,237,0.04), transparent 60%)",
      }} />
      {children}
    </div>
  );
}

export function Button({ children, variant = "outline", onClick, style = {}, onMouseEnter, onMouseLeave, href, target }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px",
    borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: "0.8rem",
    letterSpacing: "0.08em", textTransform: "uppercase", transition: "all 0.2s",
    fontWeight: 500, textDecoration: "none", cursor: "pointer",
    background:  variant === "primary" ? "var(--accent)" : "transparent",
    color:       variant === "primary" ? "#fff" : "var(--accent)",
    border:      "1px solid var(--accent)",
    ...style,
  };
  if (href) return <a href={href} target={target} rel="noreferrer" style={base} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</a>;
  return <button onClick={onClick} style={{ ...base, outline: "none" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</button>;
}

export function LinkButton({ children, href, style = {} }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)",
    fontSize: "0.72rem", color: "var(--muted)", border: "1px solid var(--border)",
    borderRadius: 6, padding: "5px 12px", transition: "all 0.2s", cursor: "pointer", textDecoration: "none",
  };
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{ ...base, ...style }}
      onMouseOver={(e) => Object.assign(e.currentTarget.style, { color: "var(--accent2)", borderColor: "var(--accent2)", background: "rgba(6,182,212,0.06)" })}
      onMouseOut={(e)  => Object.assign(e.currentTarget.style, { color: "var(--muted)",   borderColor: "var(--border)",   background: "transparent" })}
    >
      {children}
    </a>
  );
}

export function Accent({ children, color = "var(--accent2)" }) {
  return <span style={{ color }}>{children}</span>;
}