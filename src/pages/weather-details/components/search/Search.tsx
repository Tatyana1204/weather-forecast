import React from 'react';
import logo from '../../../../image/search-icon.svg'
import s from './Search.module.scss'
interface Props {

}
const Search = (props:Props) => {
    return (
        <div className={s.search}>
            <img src={logo} alt='search' />
            <input type="text" placeholder='Search for a city or airport'/>
        </div>
    );
};

export default Search;