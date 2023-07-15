import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchForm({ handleSearch }) {
  const toggleSearch = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex flex-col w-[90%] max-w-3xl bg-white text-black shadow-2xl rounded-lg overflow-hidden">
      <form className="flex items-center w-full px-3 border-none gap-6 xs:gap-3 border-b-black">
        <FaSearch className="text-lg" />
        <input
          type="search"
          className="w-full py-3 bg-white outline-none placeholder:text-black"
          placeholder="Search encyclopedia"
        />
        <button className="text-xl" onClick={(e) => toggleSearch(e)}>
          <FaTimes />
        </button>
      </form>
      <hr />
      <div className="w-full min-h-[150px] p-6 flex items-center justify-center">
        <p>No recent searches</p>
      </div>
    </div>
  );
}

export default SearchForm;
