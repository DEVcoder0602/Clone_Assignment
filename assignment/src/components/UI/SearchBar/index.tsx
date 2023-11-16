import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ className = "" }) => {
  return (
    <form className={className}>
      <label className={`relative block w-full`}>
        <button className="absolute inset-y-0 left-0 flex items-center">
          <AiOutlineSearch className="text-slate-300 h-full w-6 ps-1 hover:bg-slate-400" />
        </button>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-slate-700 w-full outline-none py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 sm:text-sm "
          placeholder="Search 9,000+ tutorials"
          type="text"
          name="search"
        />
      </label>
    </form>
  );
};

export default SearchBar;
