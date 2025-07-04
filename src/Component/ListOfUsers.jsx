import React, { useEffect, useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import TitleList from "./TitleList";
import ErrorFallback from "./ErrorFallback";
import ProductModal from "./ProductModal";

const ITEMS_PER_PAGE = 10;

const ListOfUsers = () => {
  const [userLists, setUserList] = useState([]);
  const [filteredList, setFilterList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLoading, setPageLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (searchText) {
      setIsSearching(true);
    }
    
    const filterId = setTimeout(() => {
      const filterList = userLists.filter((item) => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilterList(filterList);
      setIsSearching(false);
      setCurrentPage(1); // Reset to first page on search
    }, 300);

    return () => clearTimeout(filterId);
  }, [searchText, userLists]);

  const fetchUserData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setUserList(result);
      setFilterList(result); // Initialize filtered list with all data
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message || "Failed to fetch data");
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedId(product.id);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredList.length / ITEMS_PER_PAGE);
  const paginatedList = useMemo(() => {
    return filteredList.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredList, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setPageLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setPageLoading(false);
    }, 300); // Simulate async loading
  };

  // Show error state
  if (error) {
    return (
      <div className="bg-gray-50">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <div className="flex">
          <div className="w-full border border-black-100 bg-gray-100 rounded-md mt-4 sm:mt-8">
            <p className="font-bold text-base sm:text-lg text-black py-3 sm:py-4 px-3 sm:px-4 border-b border-black-100">
              List Of Title (0)
            </p>
            <ErrorFallback error={error} onRetry={handleRetry} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <TitleList 
          filteredList={paginatedList} 
          handleProductClick={handleProductClick}
          isLoading={isLoading || pageLoading}
          isSearching={isSearching}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          selectedId={selectedId}
        />
      
        <ProductModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productData={selectedProduct}
      />
    </>
  );
};

export default ListOfUsers;
