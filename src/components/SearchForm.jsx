// src/components/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    startDate: '',
    endDate: '',
    postcode: '',
  });

  const handleChange = (e) => {
    const value = e.target.value === 'Any' ? '' : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSearch = () => {
    onSearch(formData);
  };

  return (
    <div className='search-properties'>
      <h2>Search Properties</h2>
      {/* Add your form elements here */}
      <label>Type:</label>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="">Select</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
        <option value="Any">Any</option>
      </select>
      <br />
      

      <label>Min Price:</label>
      <input type="text" name="minPrice"  value={formData.minPrice} onChange={handleChange} />
      <br/>

      <label>Max Price:</label>
      <input type="text" name="maxPrice"  value={formData.maxPrice} onChange={handleChange} />
      <br/>

       <label>Min Bedrooms:</label>
      <select name="minBedrooms" value={formData.minBedrooms} onChange={handleChange}>
        <option value="">Select</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4 Bedrooms</option>
        <option value="5">5 Bedrooms</option>
      </select>
      <br />


       <label>Max Bedrooms:</label>
      <select name="maxBedrooms" value={formData.maxBedrooms} onChange={handleChange}>
        <option value="">Select</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4 Bedrooms</option>
        <option value="5">5 Bedrooms</option>
      </select>
      <br />
      {/* Add other form elements similarly */}
      <button onClick={handleSearch} id='searchBtn'>Find Properties</button>
    </div>
  );
};

export default SearchForm;
