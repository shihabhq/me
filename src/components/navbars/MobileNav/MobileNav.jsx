import { useContext } from "react";
import MobileNavBtn from "./MobileNavBtn";
import { SidebarContext } from "../../../contexts/SidebarContext";

const MobileNav = () => {
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <div
      style={{ right: sidebarOpen ? "0px" : "-100%" }}
      className="font-sans sidebar w-4/5 h-screen bg-[rgba(0,0,0,.8)] z-30 space-y-6 text-xl 
      mdl:hidden fixed flex flex-col items-center transition-all duration-300"
    >
      <div className="mt-32"></div>
      <MobileNavBtn
        toggleSidebar={toggleSidebar}
        href={"about"}
        text={"About"}
      />
      <MobileNavBtn
        toggleSidebar={toggleSidebar}
        href={"projects"}
        text={"Projects"}
      />
      <MobileNavBtn
        toggleSidebar={toggleSidebar}
        href={"skills"}
        text={"Skills"}
      />
      <MobileNavBtn
        toggleSidebar={toggleSidebar}
        href={"writings"}
        text={"writings"}
      />
      <button
        onClick={toggleSidebar}
        className="side-button cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-50 hover:text-background"
      >
        <a href="/Resume_of_Shihab.pdf" download="Resume_of_Shihab.pdf">
          Resume
        </a>
      </button>
    </div>
  );
};

export default MobileNav;
