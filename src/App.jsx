import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="site-shell overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <BackToTop />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

