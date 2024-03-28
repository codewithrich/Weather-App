import React, { useState } from "react";
import './App.css'
import Axios from "axios";

const KEY='Enter your API key';

const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
      );
      setData(response.data);
    } 
    catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Weather Web App</h1>
        <div className="inpCity">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} //changes the already present value in usestate
          placeholder="Enter city name"
        />
        <button onClick={fetchData}>Search</button>
        </div>
        <div> 
          {data && <div className="container">
          
            <ul> Place: {data.name}</ul>
            <ul> Temperature: {Math.round(data.main.temp)}</ul>
            <ul> latitude: {data.coord.lat}</ul>
            <ul> Longitute: {data.coord.lon}</ul>
            
          
          </div>}</div>
      </div>
    </div>
  );
};

export default App;
