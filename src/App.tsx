import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

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
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      {/* experience */}
      {/* testimonials */}
      {/* contact */}
      {/* footer */}
    </div>
  );
}

export default App;
