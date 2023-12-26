// src/components/PropertyList.js
import React from 'react';

const PropertyList = ({ properties, onSelect, onAddToFavorites }) => {
  if (properties.length === 0) {
    return <p>No properties match your search criteria.</p>;
  }
  return (
    <div className='property-list'>
      <h2>Property List</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id} className='list'>
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