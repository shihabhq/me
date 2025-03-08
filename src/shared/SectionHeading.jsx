import AnimateComponent from "./Animation";

const SectionHeading = ({ text }) => {
  return (
    <AnimateComponent>
      <div className="w-full h-fit flex items-center justify-center">
        <h1 className="section-heading">{text}</h1>
      </div>
    </AnimateComponent>
  );
};

export default SectionHeading;
