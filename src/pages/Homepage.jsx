import Navbar from "../components/navbars/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/about/About";
import Projects from "../components/projects/Projects.jsx";
import Skills from "../components/skills/Skills";
import Writings from "../components/writings/Writings";
import Contact from "../components/contacts/Contact";
import Footer from "../components/footer/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Writings />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
