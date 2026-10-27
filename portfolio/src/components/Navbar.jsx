
import { useState } from "react";
import { useScrollSpy, useScrollTo } from "../hooks/index";
import portfolioData from "../data/portfolioData";

export default function Navbar({ setHovering }) {
  const active = useScrollSpy();
  const scrollTo = useScrollTo();
  const [open, setOpen] = useState(false);

  const { navLinks, name } = portfolioData;

  const handleNav = (link) => {
    scrollTo(link);
    setOpen(false);
  };

  return (
    <>
      <nav className="site-header">
        <div className="site-nav">
          

          {/* Desktop navigation */}
          <div className="site-nav-links hide-mobile">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                className={`site-nav-link ${
                  active?.toLowerCase() === link.toLowerCase()
                    ? "active"
                    : ""
                }`}
                onClick={() => handleNav(link)}
                onMouseEnter={() => setHovering?.(true)}
                onMouseLeave={() => setHovering?.(false)}
                aria-current={
                  active?.toLowerCase() === link.toLowerCase()
                    ? "location"
                    : undefined
                }
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="site-menu-toggle hide-desktop"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? " ×" : " ☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="mobile-navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              className={`mobile-nav-link ${
                active?.toLowerCase() === link.toLowerCase()
                  ? "active"
                  : ""
              }`}
              onClick={() => handleNav(link)}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
