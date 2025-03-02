import AnimateComponent from "./Animation";

const SectionHeading = ({ text }) => {
  return (
    <AnimateComponent>
      <h1 className="section-heading">{text}</h1>
    </AnimateComponent>
  );
};

export default SectionHeading;
