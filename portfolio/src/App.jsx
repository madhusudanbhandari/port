import "./styles/globals.css";
import { useCursor }    from "./hooks/index";
import Background       from "./components/Background";
import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import Education        from "./components/Education";
import Experience       from "./components/Experience";
import Projects         from "./components/Projects";
import Skills           from "./components/Skills";
//import Achievements     from "./components/Achievements";
import Contact          from "./components/Contact";
import Footer           from "./components/Footer";

export default function App() {
  const { pos, hovering, setHovering } = useCursor();
  return (
    <div style={{ position: "relative" }}>
      <Background />
      <Navbar setHovering={setHovering} />
      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <Hero         setHovering={setHovering} />
        <Education    setHovering={setHovering} />
        <Experience   setHovering={setHovering} />
        <Projects     setHovering={setHovering} />
        <Skills       setHovering={setHovering} />
        {/* <Achievements setHovering={setHovering} /> */}
        <Contact      setHovering={setHovering} />
      </main>
      <Footer />
    </div>
  );
}