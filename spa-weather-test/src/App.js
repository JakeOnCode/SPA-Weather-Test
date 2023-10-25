import { useState } from 'react'; 
import { WEATHER_API_KEY } from './componenets/Api-key'
import Search from './componenets/search/Search';
import Cities from './componenets/cities/Cities';
import CurrentWeather from './componenets/CurrentWeather/CurrentWeather';
import './App.css';

const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/forecast'; 

const App = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (lat, lon) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric` 
      );
      if (response.ok) {
        const data = await response.json();
        setCity(data);
      } else {
        console.error('Error fetching weather data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false); 
    }
  };  

  const handleSearch = (searchedCity) => {
    setCities(searchedCity);
    setCity(null);
  };

  

  return (
    <div className="App__app">
      <h1>Weather Report</h1>
      <Search onSearch={handleSearch} />
      {!city && cities.length > 0 && <Cities cities={cities} onClick={handleClick} />}
      {loading && <div className="App__loading">Loading...</div>}
      {city && <CurrentWeather city={city} />}
    </div>
  );
};

export default App;
