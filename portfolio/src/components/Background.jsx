export default function Background() {
  return (
    <>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }} />
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, opacity: 0.025, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />
      {[
        { size: 500, color: "#7c3aed", top: -100, right: -100, delay: "0s" },
        { size: 400, color: "#06b6d4", bottom: "20%", left: -100, delay: "6s" },
        { size: 300, color: "#7c3aed", top: "50%", left: "40%", delay: "3s" },
      ].map((orb, i) => (
        <div key={i} style={{
          position: "fixed", width: orb.size, height: orb.size, borderRadius: "50%",
          background: `radial-gradient(circle, ${orb.color}55, transparent)`,
          filter: "blur(80px)", opacity: 0.2, pointerEvents: "none", zIndex: 0,
          animation: "drift 12s ease-in-out infinite alternate",
          animationDelay: orb.delay,
          top: orb.top, right: orb.right, bottom: orb.bottom, left: orb.left,
        }} />
      ))}
    </>
  );
}