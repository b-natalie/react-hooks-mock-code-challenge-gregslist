import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsArray, handleDelete }) {
  return (
    <main>
      <ul className="cards">
        {listingsArray.map(listing => <ListingCard listing={listing} key={listing.id} handleDelete={handleDelete} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
