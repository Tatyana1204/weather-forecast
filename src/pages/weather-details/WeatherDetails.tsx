import React, {useEffect} from 'react';
import s from './WeatherDetails.module.scss'
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import axios from "axios";
import WeatherBox from "./components/weatherBox/WeatherBox";
interface Props {
}
const WeatherDetails = (props:Props) => {

    return (
        <div className={s.weatherDetails}>
            <Header/>
            <Search/>
            <WeatherBox/>
        </div>

    );
};

export default WeatherDetails;