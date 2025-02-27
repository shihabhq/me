import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";

const Hamburger = () => {
  const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <div className="mdl:hidden" onClick={toggleSidebar}>
      <div className="hamburger md:hidden">
        <div
          className={sidebarOpen ? "hamburger-bar bar-up" : `hamburger-bar`}
        ></div>
        <div
          className={sidebarOpen ? "hamburger-bar bar-down" : `hamburger-bar`}
        ></div>
        <div
          className={
            sidebarOpen ? "hamburger-bar op0" : `hamburger-bar max-w-1/2`
          }
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
