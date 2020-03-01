import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  const style = {
    padding: "10px 20px",
    background: "#eee",
    borderRadius: "6px",
    border: "none",
    marginBottom: "30px"
  };

  return (
    <div>
      <input
        aria-label="Search Robots"
        onChange={searchChange}
        style={style}
        type="search"
        placeholder="Search Friends"
      />
    </div>
  );
};

export default SearchBox;
