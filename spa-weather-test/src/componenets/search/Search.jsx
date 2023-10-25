import React, { useState } from 'react';
import "./Search.css"
import {WEATHER_API_KEY} from "../Api-key";
import SearchIcon from './search.svg';

const CITIES_API_URL = `http://api.openweathermap.org/geo/1.0/direct?limit=20&appid=${WEATHER_API_KEY}`;

const Search = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const searchCities = async () => {
    const response = await fetch(`${CITIES_API_URL}&q=${searchCity}`);
    const data = await response.json();
    onSearch(data);
  };

  const handleSearch = () => {
    searchCities();
  };

  return (
    <div className="Search__search">
      <input
        placeholder="Search for a city"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt="Search"
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
