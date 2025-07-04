import React from "react";
import PropTypes from "prop-types";

const ErrorFallback = ({ error, onRetry, title = "Something went wrong" }) => {
  const getErrorMessage = (error) => {
    if (error.includes("HTTP error! status: 404")) {
      return "The data you're looking for doesn't exist.";
    }
    if (error.includes("HTTP error! status: 500")) {
      return "Our servers are having issues. Please try again.";
    }
    if (error.includes("Failed to fetch")) {
      return "Check your inte rnet connection and try again.";
    }
    return "Something unexpected happened. Please try again.";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-gray-100 border border-black-100 rounded-md p-8 max-w-md w-full text-center">
        <h2 className="text-lg font-bold text-black mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{getErrorMessage(error)}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
  title: PropTypes.string,
};

export default ErrorFallback; 