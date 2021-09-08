import React, { useState } from "react";

function Search({ handleSearchSubmit }) {

  const [ searchInput, setSearchInput ] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleSearchSubmit(searchInput);
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={""}
        onChange={handleSearchInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
