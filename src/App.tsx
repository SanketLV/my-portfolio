import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Testimonial from "./sections/Testimonial";

/**
 * Renders the main application layout with navigation, hero, about, and placeholder sections.
 *
 * @returns The root JSX element for the application.
 */
function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
