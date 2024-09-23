import React from 'react';
import WeatherItem from "./weather-item/WeatherItem";
interface Props {

}
const WeatherBox = (props:Props) => {
    return (
        <div>
           <WeatherItem/>
            <WeatherItem/>
            <WeatherItem/>
        </div>
    );
};

export default WeatherBox;