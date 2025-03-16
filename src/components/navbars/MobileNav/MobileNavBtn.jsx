import React from "react";

const MobileNavBtn = ({ href, text, toggleSidebar }) => {
  return (
    <a
      onClick={() => {
        window.location.href = "#" + href;
        toggleSidebar();
      }}
      className="side-button cursor-pointer hover:bg-button hover:text-background"
    >
      {text}
    </a>
  );
};

export default MobileNavBtn;
