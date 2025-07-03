import React from "react";

const TitleDescription = ({ displayData }) => {
  return (
    <div className="w-1/2 border border-black-200 rounded-md mt-8 ml-4">
      <p className="font-bold text-lg text-gray-800 py-4 px-4">Selected Post Details</p>
      <div className="max-h-80">
        {displayData.id ? (
          <div className="p-4 border-t-[1px] border-black-100 bg-white h-80">
            <p className="text-lg font-bold text-gray-800 mb-2">Title</p>
            <p className="text-gray-700 mb-4">{displayData.title}</p>
            <p className="text-lg font-bold text-gray-800 mb-2">Description</p>
            <p className="text-gray-700">{displayData.body}</p>
          </div>
        ) : (
          <div className="p-8 border-t-[1px] border-black-100 bg-white flex items-center justify-center h-80">
            <div className="text-center">
              <p className="text-gray-500 text-lg font-medium">No title selected</p>
              <p className="text-gray-400 text-sm mt-1">Click on a title from the list to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleDescription; 