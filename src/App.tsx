import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherDetails from "./pages/weather-details/WeatherDetails";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<WeatherDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
