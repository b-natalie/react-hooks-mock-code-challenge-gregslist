import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ listingsArray, setListingsArray ] = useState([]);
  const [ deleted, setDeleted ] = useState(false);
  const [ searchSubmit, setSearchSubmit] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(listingsData => setListingsArray(listingsData))
  }, [deleted])

  function handleDelete(deletedListing) {
    fetch(`http://localhost:6001/listings/${deletedListing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(deletedListing)
    })
    .then(resp => resp.json())
    .then(data => {
      setDeleted(!deleted);
    })
  }

  function handleSearchSubmit(searchValue) {
    setSearchSubmit(searchValue);
    console.log(searchSubmit);
  }

  const displayedListings = listingsArray.filter(listing => listing.description.toLowerCase().includes(searchSubmit.toLowerCase()));

  return (
    <div className="app">
      <Header handleSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listingsArray={displayedListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
