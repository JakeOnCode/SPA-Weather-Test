import { useState } from 'react'; 
import Search from './componenets/search/Search';
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
    </div>
  );
};

export default App;
