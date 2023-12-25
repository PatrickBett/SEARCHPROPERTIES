// src/components/PropertyList.js
import React from 'react';

const PropertyList = ({ properties, onSelect, onAddToFavorites }) => {
  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <div>Type: {property.type}</div>
            <div>Price: {property.price}</div>
            <div>Tenure: {property.tenure}</div>
            <div>Location: {property.location}</div>
            
            <button onClick={() => onSelect(property)}>View Details</button>
            <button onClick={() => onAddToFavorites(property)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
