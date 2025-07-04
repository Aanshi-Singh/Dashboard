import React from "react";
import PropTypes from "prop-types";

const ProductModal = ({ isOpen, onClose, productData }) => {
  if (!isOpen || !productData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-gray-100 border border-black-100 rounded-md shadow-xl w-full max-w-lg sm:max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-black-100">
          <h2 className="text-lg sm:text-xl font-semibold text-black">Title Detail</h2>
        </div>
        <div className="p-4 sm:p-6 bg-white rounded">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-medium text-black mb-2">ID</h3>
              <p className="text-gray-600 font-bold bg-gray-100 px-3 py-1 rounded text-sm sm:text-base">
                #{productData.id}
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium text-black mb-2">Title</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{productData.title}</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium text-black mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{productData.body}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4 sm:p-6 border-t border-black-100">
          <button
            onClick={onClose}
            className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  productData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default ProductModal; 