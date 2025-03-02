import React from "react";

const FloatingNavBtn = ({ href, text }) => {
  return (
    <button
      className="anav-button cursor-pointer"
      onClick={() => (window.location.href = href)}
    >
      {text}
    </button>
  );
};

export default FloatingNavBtn;
