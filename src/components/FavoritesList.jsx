// src/components/FavoritesList.js
import React from 'react';

const FavoritesList = ({ favorites, onRemove, onClear }) => {
  return (
    <div className='favorite-lists'>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <div>Type: {favorite.type}</div>
            <div>Price: {favorite.price}</div>
            <div>Location: {favorite.location}</div>
            <button onClick={() => onRemove(favorite.id)} id='remove-favorite'>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onClear} id='remove-favorite'>Clear Favorites</button>
    </div>
  );
};

export default FavoritesList;
