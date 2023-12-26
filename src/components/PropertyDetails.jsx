// src/components/PropertyDetails.js
import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div className='property-details'>
      <h2>Property Details</h2>
      <div id='house-img'><img src={property.picture} /></div>
      <div>Type: {property.type}</div>
      <div>Price: {property.price}</div>
      <div>Location: {property.location}</div>
      <div>Bedrooms: {property.bedrooms}</div>
      <div>Added to site: {property.added.day}{property.added.month}{property.added.year}</div>
      <div>Description: {property.description}</div>
      {/* <div>Bedrooms: {property.added}</div> */}
      
    </div>
  );
};

export default PropertyDetails;
