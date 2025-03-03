import About from "./components/about/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbars/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="bg-background text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
