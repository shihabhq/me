import React from "react";

const MobileNavBtn = ({ href, text, toggleSidebar }) => {
  return (
    <button
      onClick={() => {
        window.location.href = "#" + href;
        toggleSidebar();
      }}
      className="side-button cursor-pointer hover:bg-button hover:text-background"
    >
      {text}
    </button>
  );
};

export default MobileNavBtn;
