import { useState, useEffect, useRef } from "react";
import portfolioData from "../data/portfolioData";

export function useScrollSpy() {
  const [active, setActive] = useState("About");
  const { navLinks } = portfolioData;

  useEffect(() => {
    const handler = () => {
      const sections = navLinks.map((l) => document.getElementById(l.toLowerCase()));
      const idx = sections.findLastIndex((s) => s && s.getBoundingClientRect().top <= 120);
      if (idx !== -1) setActive(navLinks[idx]);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [navLinks]);

  return active;
}

export function useInView(ref, threshold = 0.12) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return visible;
}

export function useCursor() {
  const [pos, setPos]           = useState({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return { pos, hovering, setHovering };
}

export function useScrollTo() {
  return (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}