import { useEffect, useState } from "react";
import { XlviLoader } from "react-awesome-loaders";
import { useLocation } from "react-router";

const LoaderPage = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    setLoader(true);
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loader) {
    return (
      <section className="h-screen w-full flex items-center justify-center">
        <XlviLoader
          boxColors={["#fff", "#66fcf1", "#00c950"]}
          desktopSize={"158px"}
          mobileSize={"100px"}
        />
      </section>
    );
  }

  return <>{children}</>;
};

export default LoaderPage;
