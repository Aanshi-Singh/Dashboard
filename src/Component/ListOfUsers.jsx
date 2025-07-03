import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TitleList from "./TitleList";
import DetailCard from "./TitleDescription";

const ListOfUsers = () => {
  const [userLists, setUserList] = useState([]);
  const [filteredList, setFilterList] = useState([]);
  const [displayData, setDisplayData] = useState({});
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
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
    }, 300);

    return () => clearTimeout(filterId);
  }, [searchText, userLists]);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
          setUserList(result);
          setIsLoading(false);
        });
    };
    fetchUserData();
  }, []);

  const handleListClick = (data) => {
    setDisplayData(data);
  };

      return (
      <div className="bg-gray-100" >
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <div className="flex">
          <TitleList 
            filteredList={filteredList} 
            displayData={displayData} 
            handleListClick={handleListClick}
            isLoading={isLoading}
            isSearching={isSearching}
          />
          <DetailCard displayData={displayData} />
        </div>
      </div>
  );
};

export default ListOfUsers;
