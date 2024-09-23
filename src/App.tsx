import React from 'react';
import {Route, Routes } from 'react-router-dom';
import WeatherDetails from "./pages/weather-details/WeatherDetails";
import Home from "./pages/home/components/Home";
import './styles/index.scss'

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<WeatherDetails />} />
        </Routes>
    </div>
  );
}

export default App;
