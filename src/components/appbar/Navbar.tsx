import { Link } from "react-router-dom";
import logo from "/M.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <div className="flex h-[7vh] w-full justify-between items-center bg-blue-800 opacity-80">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="w-10 h-10 rounded-full ml-52 cursor-pointer"
          />
        </Link>
        <div className="mr-52 flex gap-5">
          <div className="font-semibold hover:text-blue-700 cursor-pointer duration-150 opacity-100 text-white">
            Login
          </div>
          <div className="font-semibold hover:text-blue-700 cursor-pointer duration-150 opacity-100 text-white">
            Register
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
