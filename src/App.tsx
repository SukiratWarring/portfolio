import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Hide header when scrolling starts on mobile, or hero image appears on desktop
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        // Hide header as soon as scrolling starts on mobile
        setHideHeader(scrollTop > 0);
      } else {
        // Hide header when hero image appears on desktop
        const heroImg = document.querySelector(".hero-img");
        if (heroImg) {
          const top = heroImg.getBoundingClientRect().top;
          setHideHeader(top <= 0);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <header className={`site-header${hideHeader ? " hidden" : ""}`}>
        <nav className="nav">
          <a className="brand" href="/" aria-label="Home">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 2l8 4.5v9L12 20.5 4 15.5v-9L12 2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M12 2v9.2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M20 6.5l-8 4.7-8-4.7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="links">
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="/#contact">Contact</a>
          </div>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Sukirat Warring
      </footer>
    </div>
  );
}

export default App;
