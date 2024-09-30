import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../../../image/icon-more.svg";
import s from './Header.module.scss'

interface Props {

}

const Header = (props:Props) => {
    return (
        <div className={s.header}>
            <Link to='/hourse' className={s.headerLink}><span>&lt; Weather</span></Link>
            <img src={logo} alt='more' />
        </div>
    );
};

export default Header;