import About from "./sections/About";
import Experience from "./sections/Experience";
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
      <section className="min-h-screen" />
      {/* contact */}
      {/* footer */}
    </div>
  );
}

export default App;
