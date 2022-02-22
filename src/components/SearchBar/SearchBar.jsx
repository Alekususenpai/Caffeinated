import React from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, handleChange }) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
}

export default SearchBar;
