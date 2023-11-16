import SearchBar from "../UI/SearchBar";
import { BsFire } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoEnterOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-darkBlue text-white flex flex-row justify-between items-center p-2">
      <SearchBar className="md:inline hidden" />
      <button className="flex flex-row items-center text-2xl">
        <h1 className="font-mono">freeCodeCamp </h1>(
        <span>
          <BsFire className="w-6 h-6" />
        </span>
        )
      </button>
      <div className="flex flex-row gap-4 items-center text-lg">
        <button className="outline outline-1 px-3 hover:bg-white focus:bg-white    hover:text-black focus:text-black">
          <span className="md:inline hidden">Menu</span>
          <GiHamburgerMenu className="md:hidden inline" />
        </button>
        <Link to="/signup">
          <button className=" bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 outline outline-1 outline-yellow-600 px-3 text-black">
            <span className="md:inline hidden">Sign In</span>
            <IoEnterOutline className="md:hidden inline" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
