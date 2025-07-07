import React, { useState } from 'react';
import { WiDaySunny } from "react-icons/wi"; 
function Weather() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = '810901f3c70f8754158b4bcc606047db';

  function getWeatherData() {
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        if (!response.ok) throw new Error('City not found');
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  return (
    <div className="container  mt-5 text-center">
      <div className="ffont d-flex justify-content-center mb-4">
        <div className="input-group shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && getWeatherData()}
          />
          <button className="btn btn-success" onClick={getWeatherData}>
            Get Weather
          </button>
        </div>
      </div>

      {loading && <div className="text-info">Loading...</div>}

      {error && <div className="alert alert-danger">{error}</div>}

      {data && (
        <div className="card mx-auto p-4 shadow-lg" style={{ maxWidth: "400px" }}>
           <img
    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
    alt="Weather Icon"
    className="mx-auto mb-2"
    style={{ width: "100px" }}
  />
          <h3>{data.name}, {data.sys.country}</h3>
          <h1 className="display-4">{Math.round(data.main.temp)}°C</h1>
          <p className="lead">{data.weather[0].main} - {data.weather[0].description}</p>
          
          <hr />
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
