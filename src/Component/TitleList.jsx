import React from "react";
import PropTypes from "prop-types";
import noDataImg from "../assets/noData.png";

const TitleList = ({ filteredList, handleProductClick, isLoading, isSearching, error, currentPage, totalPages, onPageChange, selectedId }) => {
  return (
    <div className="w-full border border-black-100 bg-gray-100 rounded-md mt-4 sm:mt-8">
      <p className="font-bold text-base sm:text-lg text-black py-3 sm:py-4 px-3 sm:px-4 border-b border-black-100">
        List Of Title ({filteredList.length})
        {isSearching && <span className="text-sm text-gray-500 ml-2">Searching...</span>}
      </p>
      <ul className="max-h-60 sm:max-h-80 overflow-y-scroll border-t-[1px] border-black-100">
        {isLoading ? (
          <div className="flex items-center justify-center h-40 sm:h-80">
            <div className="text-center">
              <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-black-800 mx-auto mb-2"></div>
              <p className="text-gray-500 text-sm sm:text-base">Loading...</p>
            </div>
          </div>
        ) : filteredList.length === 0 ? (
          <div className="flex items-center justify-center h-40 sm:h-80">
            <div className="text-center flex flex-col items-center">
              <img
                src={noDataImg}
                alt="No data"
                loading="lazy"
                className="w-16 h-16 mb-2 opacity-70"
              />
              <p className="text-gray-500 text-base sm:text-lg font-medium">No titles found</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {error ? "Please fix the error to view data" : "Try adjusting your search terms"}
              </p>
            </div>
          </div>
        ) : (
          filteredList?.map((userData) => {
            const isSelected = selectedId === userData.id;
            return (
              <li
                key={userData.id}
                onClick={() => handleProductClick(userData)}
                className={`p-3 sm:p-4 border-t-[1px] border-x-[1px] border-black-100 cursor-pointer last:border-b-[1px] text-sm sm:text-base transition-colors
                  ${isSelected ? 'bg-gray-200 border-l-4 border-l-black' : 'bg-white hover:bg-gray-100'}`}
              >
                {userData.title}
              </li>
            );
          })
        )}
      </ul>
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 py-3 px-3 sm:px-4 border-t border-black-100">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded bg-black text-white transition-colors ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-800'
            }`}
            aria-label="Previous page"
          >
            Prev
          </button>
          <span className="px-3 py-1 rounded border bg-white text-black text-sm font-medium select-none">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded bg-black text-white transition-colors ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'hover:bg-gray-800'
            }`}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

TitleList.propTypes = {
  filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleProductClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isSearching: PropTypes.bool,
  error: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TitleList; 