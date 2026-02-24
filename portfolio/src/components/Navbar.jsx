import { useState } from "react";
import { useScrollSpy, useScrollTo } from "../hooks/index";
import portfolioData from "../data/portfolioData";

export default function Navbar({ setHovering }) {
  const active   = useScrollSpy();
  const scrollTo = useScrollTo();
  const [open, setOpen] = useState(false);
  const { navLinks, name } = portfolioData;

  const handleNav = (link) => { scrollTo(link); setOpen(false); };

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: "1px solid var(--border)", backdropFilter: "blur(24px)", background: "rgba(10,10,15,0.7)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ fontWeight: 800, fontSize: "1.1rem", background: "linear-gradient(90deg,#fff,var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {name.split(" ")[0]}<span style={{ WebkitTextFillColor: "var(--accent)" }}>.</span>
          </div>

          {/* Desktop */}
          <div className="hide-mobile" style={{ display: "flex", gap: 4 }}>
            {navLinks.map((link) => (
              <button key={link} onClick={() => handleNav(link)}
                onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.12em",
                  textTransform: "uppercase", padding: "6px 14px", borderRadius: 4, cursor: "pointer",
                  outline: "none", transition: "all 0.2s", background: active === link ? "var(--card)" : "transparent",
                  color: active === link ? "var(--accent2)" : "var(--muted)",
                  border: active === link ? "1px solid rgba(6,182,212,0.3)" : "1px solid transparent",
                }}>
                {link}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button className="hide-desktop" onClick={() => setOpen(true)}
            style={{ background: "none", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
            ☰ Menu
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(10,10,15,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
          <button onClick={() => setOpen(false)} style={{ position: "absolute", top: 24, right: 24, background: "none", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>✕ Close</button>
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleNav(link)}
              style={{ background: "none", border: "none", color: link === active ? "var(--accent2)" : "var(--text)", fontSize: "1.5rem", fontFamily: "Syne, sans-serif", fontWeight: 700, cursor: "pointer" }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}