import { HeroNavBtn } from "./HeroNavBtn";


const HeroNav = () => {
  return (
    <nav className="flex max-w-7xl w-[93%] xl:w-4/5 mx-auto h-28 justify-between items-center animate__animated animate__fadeIn">
      <div
        className="font-sans text-4xl cursor-pointer font-extrabold"
        onClick={() => (window.location.href = "#")}
      >
        Shihabhaque<span className="text-button">.</span>
      </div>
      <div className="font-sans text-xl hidden mdl:block">
        <HeroNavBtn href={"about"} text={"About"} idx={1} />
        <HeroNavBtn href={"projects"} text={"Projects"} idx={2} />
        <HeroNavBtn href={"skills"} text={"Skills"} idx={3} />
        <HeroNavBtn href={"writings"} text={"writings"} idx={4} />
        <a
          href="/Resume_of_Shihab.pdf"
          download="Resume_of_Shihab.pdf"
          className="nav-button bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-50 hover:text-background cursor-pointer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default HeroNav;
