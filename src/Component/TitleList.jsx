import React from "react";

const TitleList = ({ filteredList, displayData, handleListClick, isLoading, isSearching }) => {
  return (
    <div className="w-1/2 border border-black-100 bg-gray-100 rounded-md mt-8">
      <p className="font-bold text-lg text-gray-800 py-4 px-4">
        List Of Title {`(${filteredList.length})`}
        {isSearching && <span className="text-sm text-gray-500 ml-2">Searching...</span>}
      </p>
      <ul className="max-h-80 overflow-y-scroll border-t-[1px] border-black-100">
        {isLoading ? (
          <div className="flex items-center justify-center h-80">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mx-auto mb-2"></div>
              <p className="text-gray-500">Loading...</p>
            </div>
          </div>
        ) : (
          filteredList?.map((userData) => {
            return (
              <li
                key={userData.id}
                onClick={() => handleListClick(userData)}
                className={`p-4 border-t-[1px] border-x-[1px] border-black-100 cursor-pointer last:border-b-[1px] ${
                  displayData.id === userData.id 
                    ? 'bg-gray-100 border-l-4 border-l-black' 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                {userData.title}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default TitleList; 