// Import CSS
import "bulma";
import "./App.css";

// Import Components
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  // some dependencies produce console errors
  console.log = console.warn = console.error = () => {};

  return (
    <div className="content-container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
