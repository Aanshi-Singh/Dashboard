import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        name="search"
        placeholder="Search the title..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 py-2 px-4 rounded-md bg-white border outline-none text-gray-700 placeholder-gray-400 text-lg font-medium"
      />
      {searchText && (
        <button
          onClick={() => setSearchText("")}
          className="px-4 py-2 bg-black text-white rounded-md font-medium"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar; 