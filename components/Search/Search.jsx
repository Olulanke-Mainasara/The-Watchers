import React from "react";
import SearchForm from "./SearchForm";

function Search({ search, handleSearch }) {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-40 bg-gray-800/0 backdrop-blur-lg ${
        search ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <SearchForm handleSearch={handleSearch} />
    </div>
  );
}

export default Search;
