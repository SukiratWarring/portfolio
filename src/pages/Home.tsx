import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <span className="hero-img-wrap">
          <img
            className="hero-img"
            src="/Static/my.jpg"
            alt="Sukirat Warring"
          />
          <span
            className="hero-badge"
            aria-hidden="true"
            title="Blockchain Dev"
          >
            ⛓️
          </span>
        </span>
        <h1 className="hero-name">Sukirat Warring</h1>
        <p className="hero-title">Blockchain Developer · 3.5+ years</p>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
