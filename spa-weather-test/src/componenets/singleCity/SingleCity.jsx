import "./SingleCity.css";

const SingleCity = ({ city, onClick }) => {
  return (
    <button className="singleCity__city" onClick={() => onClick(city.lat, city.lon)}>
      <h2>
        {city.name ? `${city.name}` : ''}
      </h2>
      <h3>
        {city.state ? `${city.state},` : ''}
        {city.country ? `${city.country}` : ''}
      </h3>
    </button>
  );
}

export default SingleCity;
