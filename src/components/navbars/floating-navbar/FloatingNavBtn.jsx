import React from "react";

const FloatingNavBtn = ({ href, text }) => {
  return (
    <a
      href={href}
      className="anav-button cursor-pointer"
      onClick={() => (window.location.href = href)}
    >
      {text}
    </a>
  );
};

export default FloatingNavBtn;
