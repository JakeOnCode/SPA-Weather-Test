import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ city }) => {
  const forecastList = city.list;

  if (!forecastList || forecastList.length === 0) {
    return null;
  }

  const forecast = forecastList[0];

  const weatherIconUrl =
    forecast.weather && forecast.weather.length > 0
      ? `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`
      : '';

      const exportJSON = () => {
        const jsonData = {
          city: {
            name: city.city.name,
            country: city.city.country,
          },
          temperature: forecast.main ? Math.round(forecast.main.temp) : null,
          feels_like: forecast.main ? Math.round(forecast.main.feels_like) : null,
          wind: forecast.wind ? forecast.wind.speed : null,
          humidity: forecast.main ? forecast.main.humidity : null,
          pressure: forecast.main ? forecast.main.pressure : null,
        };
      
        const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${city.city.name}.json`;
        a.click();
      };
      

  const exportXML = () => {
    const xmlData = `
      <city>
        <name>${city.city.name}</name>
        <country>${city.city.country}</country>
        <temperature>${forecast.main ? Math.round(forecast.main.temp) : ''}°C</temperature>
        <feels_like>${forecast.main ? Math.round(forecast.main.feels_like) : ''}°C</feels_like>
        <wind>${forecast.wind ? forecast.wind.speed : ''} m/s</wind>
        <humidity>${forecast.main ? forecast.main.humidity : ''} %</humidity>
        <pressure>${forecast.main ? forecast.main.pressure : ''} hPa</pressure>
      </city>
    `;

    const blob = new Blob([xmlData], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${city.city.name}.xml`;
    a.click();
  };

  return (
    <div className="CurrentWeather__weather">
      <div className="CurrentWeather__top">
        <div>
          <p className="CurrentWeather__city-name">{city.city.name}, {city.city.country}</p>
          <p className="CurrentWeather__weather-description">
            {forecast.weather && forecast.weather.length > 0
              ? `${forecast.weather[0].description}`
              : ''}
          </p>
        </div>
        <img alt="weather" className="CurrentWeather__weather-icon" src={weatherIconUrl} />
      </div>
      <div className="CurrentWeather__bottom">
        <p className="CurrentWeather__temperature">
          {forecast.main ? `${Math.round(forecast.main.temp)}°C` : ''}
        </p>
        <div className="CurrentWeather__details">
          <div className="CurrentWeather__row">
            <span className="CurrentWeather__label">Feels like</span>
            <span className="CurrentWeather__value">
                {forecast.main ? `${Math.round(forecast.main.feels_like)}°C` : ''}
            </span>
          </div>
          <div className="CurrentWeather__row">
            <span className="CurrentWeather__label">Wind</span>
            <span className="CurrentWeather__value">
                {forecast.wind ? `${forecast.wind.speed} m/s` : ''}
            </span>
          </div>
          <div className="CurrentWeather__row">
            <span className="CurrentWeather__label">Humidity</span>
            <span className="CurrentWeather__value">
                {forecast.main ? `${forecast.main.humidity} %` : ''}
            </span>
          </div>
          <div className="CurrentWeather__row">
            <span className="CurrentWeather__label">Pressure</span>
            <span className="CurrentWeather__value">
                {forecast.main ? `${forecast.main.pressure} hPa` : ''}
            </span>
          </div>
          </div>
      </div>
      <div className="CurrentWeather__exportButtons">
        <button onClick={exportJSON}>Export as JSON</button>
        <button onClick={exportXML}>Export as XML</button>
      </div>
    </div>
  );
};

export default CurrentWeather;