import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FaSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search the title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full py-2 pl-10 pr-4 rounded-md bg-white border outline-none text-gray-700 placeholder-gray-400 text-lg font-medium"
        />
      </div>
      {searchText && (
        <button
          onClick={() => setSearchText("")}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 font-medium"
        >
          Clear
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBar; 