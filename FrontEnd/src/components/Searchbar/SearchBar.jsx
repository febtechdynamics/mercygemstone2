import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(` ${import.meta.env.VITE_REACT_APP_base_url}/api/product`)
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.products.filter((product) => {
          return (
            value &&
            product &&
            product.productName.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(filteredResults);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar">
      <div className="search_input_wrapper">
        <FaSearch id="search_icone" />
        <input
          placeholder="Search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
