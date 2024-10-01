import WeatherItem from "./weather-item/WeatherItem";
import {useAppSelector} from "../../../../hooks/hook";
import Loader from "../../../../loader/loader";
import React from "react";
import s from '../../WeatherDetails.module.scss'


const WeatherBox = () => {
    // @ts-ignore
    const cities: [] = useAppSelector(state=> state.weatherCities.weathers);
    const loader:string = useAppSelector((state)=>state.weatherCities.status)
    const search:string = useAppSelector(state => state.weatherCities.search)

    if (loader === 'fulfilled' && cities.length > 1) {
        return (
            <div className={s.weatherBox}>
                {cities.map((city: {city:string, H:string, L:string, condition:string, temp_c:string} ) =>
                    <WeatherItem city={city.city} H={city.H} L={city.L} condition={city.condition} temp_c={city.temp_c} key={city.city}/>)}
            </div>
        );
    }

    else if(search==='fulfilled') {
        // @ts-ignore
        return <WeatherItem city={cities.city} H={cities.H} L={cities.L} condition={cities.condition} temp_c={cities.temp_c} key={1}/>
    }
    else {
        return (
            <div>
                    <Loader/>
            </div>
        )
    }
};

export default WeatherBox;