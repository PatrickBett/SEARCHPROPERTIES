// src/App.js
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import FavoritesList from './components/FavoritesList';
import data from './data.json';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (criteria) => {
    const results = data.properties.filter((property) => {
      const addedDate = new Date(property.added.year, getMonthNumber(property.added.month), property.added.day);
      const currentDate = new Date();

      const timeDifference = currentDate - addedDate;
      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

      return (
        (!criteria.type || property.type.toLowerCase() === criteria.type.toLowerCase()) &&
        (!criteria.minPrice || property.price >= criteria.minPrice) &&
        (!criteria.maxPrice || property.price <= criteria.maxPrice) &&
        (!criteria.minBedrooms || property.bedrooms >= criteria.minBedrooms) &&
        (!criteria.maxBedrooms || property.bedrooms <= criteria.maxBedrooms) &&
        (!criteria.addedDate || meetsAddedDateCriteria(criteria.addedDate, daysDifference)) &&
        (!criteria.postcode || property.location.includes(criteria.postcode))
      );
    });

    setSearchResults(results);
  };

  const meetsAddedDateCriteria = (criteria, daysDifference) => {
    switch (criteria) {
      case 'last24':
        return daysDifference <= 1;
      case 'last3days':
        return daysDifference <= 3;
      case 'last7days':
        return daysDifference <= 7;
      case 'last14days':
        return daysDifference <= 14;
      default:
        return true;
    }
  };

  const getMonthNumber = (month) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(month);
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