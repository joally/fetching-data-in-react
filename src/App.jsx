import { useState } from "react";
import * as weatherService from './services/weatherService';
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
import'./App.css';


// src/App.jsx
const App = () => {
  const fetchData = async () => {
    const data = await weatherService.show('New York');
    console.log('Data:', data);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
};

export default App;
