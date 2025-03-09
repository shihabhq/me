import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../shared/Loading";

const LoaderPage = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const location = useLocation(); 

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
        <Loading />
      </section>
    );
  }

  return <>{children}</>;
};

export default LoaderPage;
