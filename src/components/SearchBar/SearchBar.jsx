import React from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, handleChange }) {
  return (
    <div className="search">
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default SearchBar;
