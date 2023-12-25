// src/App.js
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import FavoritesList from './components/FavoritesList';
import data from './data.json'; // Import your JSON data

console.log(data.properties)
const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (criteria) => {
    // Implement your search logic here using criteria
    const results = data.properties.filter((property) => {
      return (
        (!criteria.type || property.type.toLowerCase() === criteria.type.toLowerCase()) &&
        (!criteria.minPrice || property.price >= criteria.minPrice) &&
        (!criteria.maxPrice || property.price <= criteria.maxPrice) &&
        (!criteria.minBedrooms || property.bedrooms >= criteria.minBedrooms) &&
        (!criteria.maxBedrooms || property.bedrooms <= criteria.maxBedrooms) &&
        (!criteria.startDate || new Date(property.added.year, property.added.month, property.added.day) >= new Date(criteria.startDate)) &&
        (!criteria.endDate || new Date(property.added.year, property.added.month, property.added.day) <= new Date(criteria.endDate)) &&
        (!criteria.postcode || property.location.includes(criteria.postcode))
      );
    });

    setSearchResults(results);
  };

  const handleSelectProperty = (property) => {
    setSelectedProperty(property);
  };

  const handleAddToFavorites = (property) => {
    if (!favorites.find((fav) => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const handleRemoveFromFavorites = (propertyId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== propertyId);
    setFavorites(updatedFavorites);
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };

  return (
    <div className='main-app-div'>
      <SearchForm onSearch={handleSearch} />
      <PropertyList properties={searchResults} onSelect={handleSelectProperty} onAddToFavorites={handleAddToFavorites} />
      {selectedProperty && <PropertyDetails property={selectedProperty} />}
      <FavoritesList favorites={favorites} onRemove={handleRemoveFromFavorites} onClear={handleClearFavorites} />
    </div>
  );
};

export default App;
