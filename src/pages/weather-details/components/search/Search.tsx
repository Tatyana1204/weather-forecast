import React, {useEffect} from 'react';
import logo from '../../../../image/search-icon.svg'
import s from './Search.module.scss'
import axios from "axios";
interface Props {

}

const Search = (props:Props) => {
    const [cities, setCities] = React.useState('London');
   const [weather, setWeather] = React.useState([]);

    useEffect(()=> {
        const Debounce = setTimeout(()=>{
            axios
                .get(`http://api.weatherapi.com/v1/forecast.json?key=073e7ffc05f44adfb2f113852243006&q=${cities}&days=1&aqi=yes&alerts=yes`)
                .then(data=>{
                    console.log(data.data);
                    setWeather(data.data);
                })
        }, 1000);
        return () => clearTimeout(Debounce)
    }, [cities])
    return (
        <div className={s.search}>
            <img src={logo} alt='search' />
            <input
                value={cities}
                onChange={e => {setCities(e.target.value)}}
                type="text"
                placeholder='Search for a city or airport'
            />
        </div>
    );
};

export default Search;