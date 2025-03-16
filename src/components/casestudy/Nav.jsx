
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="mx-auto px-4 py-6">
      <Link
        to={"/"}
        className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
      >
        <BsArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default Nav;
