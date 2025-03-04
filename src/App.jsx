import { Toaster } from "react-hot-toast";
import About from "./components/about/About";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbars/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Writings from "./components/writings/Writings";

function App() {
  return (
    <div className="bg-background text-white">
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Writings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
