import { Link } from "react-router-dom";
import logo from "/M.svg";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <div className="flex h-[7vh] w-full justify-around items-center bg-black opacity-95 gap-5">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-500"
          />
        </Link>
        <div className="flex gap-5">
          <p className="font-semibold hover:text-yellow-500 cursor-pointer duration-150 opacity-100 text-white">
            Login
          </p>
          <p className="font-semibold hover:text-yellow-500 cursor-pointer duration-150 opacity-100 text-white">
            Register
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
