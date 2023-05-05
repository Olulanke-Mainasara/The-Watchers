import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchForm({ handleSearch }) {
  const toggleSearch = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex flex-col w-[90%] max-w-3xl bg-black dark:bg-white text-white dark:text-black rounded-lg overflow-hidden">
      <form className="flex items-center w-full gap-6 px-3 border-none allT:gap-3 border-b-black">
        <FaSearch className="text-lg" />
        <input
          type="search"
          className="w-full py-3 bg-black outline-none dark:bg-white placeholder:text-white dark:placeholder:text-black"
          placeholder="Search encyclopedia"
        />
        <button className="text-4xl rotate-45" onClick={(e) => toggleSearch(e)}>
          +
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
