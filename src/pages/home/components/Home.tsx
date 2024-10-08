import React from 'react';
import s from './Home.module.scss'
import houseDay from '../../../image/house_day.png'
import houseNight from '../../../image/house_night.png'

import { useAppSelector } from '../../../hooks/hook';
import Loader from "../../../loader/loader";
import HomeTitle from "./home-title/HomeTitle";
import HomeModal from "./home-modal/HomeModal";

const Home = () => {

 let house:string;
 let time:string;
 let currentTime = new Date().getHours();
 if (currentTime > 6 && currentTime < 18) {
     time='day';
     house = houseDay;
 }
 else{
     time='night';
     house = houseNight
 }

 const loader : string = useAppSelector(state=>state.weather.status);

    if(loader === 'fulfilled'){

        return (
            <div className={[s['home'], s[`${time}`] ].join(" ")}>
                <HomeTitle/>
                <div className={s.house}>
                    <img className={s.homeImg} src={house} alt=""/>
                </div>
               <HomeModal/>
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