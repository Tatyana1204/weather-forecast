import React, {useEffect} from 'react';
import logo from '../../../../image/search-icon.svg'
import s from './Search.module.scss'
import {useAppDispatch, useAppSelector} from "../../../../hooks/hook";
import {getAPICities, getCity} from "../../../../store/weatherCitiesSlice";
import {getAPI} from "../../../../store/weatherSlice";

const Search = () => {
const loader:  string = useAppSelector(state => state.weatherCities.status);
    const [cities, setCities] = React.useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(()=> {
        const Debounce = setTimeout(()=>{
            if(cities.length > 0){
                dispatch(getCity(cities))
                dispatch(getAPI(cities))
            }
            if(cities === '' && loader !== 'fulfilled'){
                dispatch(getAPICities())
            }
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