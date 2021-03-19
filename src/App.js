// Import CSS
import "bulma";
import "./App.css";

// Import Components
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  // some dependencies produce console errors
  console.log = console.warn = console.error = () => {};

  return (
    <div className="content-container">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
