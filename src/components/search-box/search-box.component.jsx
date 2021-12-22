import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // onChange={(el) => this.setState({ searchField: el.target.value })}
    onChange={handleChange}
  />
);
