import MobileNav from "../navbars/MobileNav/MobileNav";
import Hamburger from "./Hamburger";
import HeroNav from "./hero-nav/HeroNav";
import FloatingNav from "./floating-navbar/FloatingNav";

const Navbar = () => {
  return (
    <>
      <FloatingNav />
      <MobileNav />
      <Hamburger />
      <HeroNav />
    </>
  );
};

export default Navbar;
