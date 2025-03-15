import React from 'react';
import { CiSearch } from "react-icons/ci";
import './Search.css'; // import the CSS file

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <i className="fa fa-search search-icon"><CiSearch /></i> {/* Search icon on the left side */}
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
    </div>
  );
};

export default Search;
