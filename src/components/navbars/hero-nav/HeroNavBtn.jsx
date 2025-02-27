const HeroNavBtn = ({ href, text }) => {
  return (
    <button
      onClick={() => (window.location.href = "#" + href)}
      className="nav-button  hover:-translate-y-[6px] hover:bg-button hover:text-background"
    >
      {text}
    </button>
  );
};

export default HeroNavBtn;
