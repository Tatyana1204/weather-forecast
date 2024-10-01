import React from 'react';
import s from './WeatherDetails.module.scss'
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import WeatherBox from "./components/weatherBox/WeatherBox";

const WeatherDetails = () => {
    let time:string;

    let currentTime = new Date().getHours();
    if (currentTime > 6 && currentTime < 18) {
        time='day';
    }
    else{
        time='night';
    }
    return (
        <div className={[s['weatherDetails'], s[`${time}`] ].join(" ")}>
            <Header/>
            <Search/>
            <WeatherBox/>
        </div>

    );
};

export default WeatherDetails;