// src/components/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    addedDate: '',
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
      <label>Type:</label>
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="">Any</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>
      <br />

      <label>Min Price:</label>
      <input type="text" name="minPrice" value={formData.minPrice} onChange={handleChange} />
      <br />

      <label>Max Price:</label>
      <input type="text" name="maxPrice" value={formData.maxPrice} onChange={handleChange} />
      <br />

      <label>Min Bedrooms:</label>
      <select name="minBedrooms" value={formData.minBedrooms} onChange={handleChange}>
        <option value="">Any</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4 Bedrooms</option>
        <option value="5">5 Bedrooms</option>
      </select>
      <br />

      <label>Max Bedrooms:</label>
      <select name="maxBedrooms" value={formData.maxBedrooms} onChange={handleChange}>
        <option value="">Any</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4 Bedrooms</option>
        <option value="5">5 Bedrooms</option>
      </select>
      <br />

      <label>Added Date:</label>
      <select name="addedDate" value={formData.addedDate} onChange={handleChange}>
        <option value="">Anytime</option>
        <option value="last24">Last 24 hours</option>
        <option value="last3days">Last 3 days</option>
        <option value="last7days">Last 7 days</option>
        <option value="last14days">Last 14 days</option>
      </select>
      <br />

      <label>Postcode:</label>
      <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} />
      <br />

      <button onClick={handleSearch} id='searchBtn'>Find Properties</button>
    </div>
  );
};

export default SearchForm;