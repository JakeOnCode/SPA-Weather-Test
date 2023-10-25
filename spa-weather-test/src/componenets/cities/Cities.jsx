import React from 'react';
import SingleCity from '../singleCity/SingleCity';

const Cities = ({ cities, onClick }) => {
  return (
    <div id="cities">
      {cities?.length > 0 ? (
        <div className="container">
          {cities.map((city) => (
            <SingleCity key={`${city.lat}-${city.lon}`} city={city} onClick={onClick} />
          ))}
        </div>
      ) : (
        <p>No Cities Found!</p>
      )}
    </div>
  );
};

export default Cities;
