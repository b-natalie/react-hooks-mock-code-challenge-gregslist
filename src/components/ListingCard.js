import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {

  const [ favorited, setFavorited ] = useState(false);

  function handleFavoriteClick() {
    setFavorited(!favorited);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
