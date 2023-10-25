import { useState } from 'react'; 
import Search from './componenets/search/Search';
import Cities from './componenets/cities/Cities';
import './App.css';



const App = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);


  

  const handleSearch = (searchedCity) => {
    setCities(searchedCity);
    setCity(null);
  };

  

  return (
    <div className="App__app">
      <h1>Weather Report</h1>
      <Search onSearch={handleSearch} />
      {!city && cities.length > 0 && <Cities cities={cities}  />}
    </div>
  );
};

export default App;
