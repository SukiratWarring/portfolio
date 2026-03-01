import About from "./About";
import Stats from "./Stats";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { useYearsOfExperience } from "../utils/experience";
import { useInView } from "../hooks/useInView";

export default function Home() {
  const yearsOfExperience = useYearsOfExperience();
  const { ref: heroRef, isInView: heroInView } = useInView<HTMLElement>({
    threshold: 0.2,
    rootMargin: "0px 0px 0px 0px",
  });

  return (
    <div className="home">
      <section
        ref={heroRef}
        className={`hero animate-on-scroll ${heroInView ? "visible" : ""}`}
      >
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
        <p className="hero-title">Blockchain Developer · {yearsOfExperience} years</p>
      </section>
      <section id="about">
        <About />
      </section>
      <Stats />
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
