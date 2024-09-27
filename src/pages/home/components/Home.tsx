import React from 'react';
import {Link} from "react-router-dom";
import s from './Home.module.scss'
import house from '../../../image/House.png'
import { useAppSelector } from '../../../hooks/hook';
import Loader from "../../../loader/loader";

const Home = () => {
    const temp :{
        temp_c: number;
        city: string;
        condition: string;
        H: number;
        L: number;
    } = useAppSelector(state => state.weather.weather);

    const loader : string = useAppSelector(state=>state.weather.status);

    if(loader === 'fulfilled'){

        return (
            <div className={s.home}>
                <div className={s.firstTemp}>
                    <span className={s.city}>{temp.city}</span>
                    <span className={s.temp}>{temp.temp_c}&deg;</span>
                    <span className={s.condition}>{temp.condition}</span>
                    <span className={s.MaxMinTemp}>H:{temp.H}  L:{temp.L}</span>
                </div>
                <div className={s.house}>
                    <img src={house} alt=""/>
                </div>
                <div className={s.modal}>
                    <Link to='/details'>детали</Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={s.home}>
                    <Loader/>
            </div>
        )
    }

};

export default Home;