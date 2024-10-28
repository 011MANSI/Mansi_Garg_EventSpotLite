// src/components/SearchBar.js
import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search events..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
