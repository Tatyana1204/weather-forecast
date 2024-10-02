import React from 'react';
import s from "../Home.module.scss";
import {useAppSelector} from "../../../../hooks/hook";

const HomeTitle = () => {
    const temp :{
        temp_c: number;
        city: string;
        condition: string;
        H: number;
        L: number;
    } = useAppSelector(state => state.weather.weather);
    return (
            <div className={s.firstTemp}>
                <span className={s.city}>{temp.city}</span>
                <span className={s.temp}>{temp.temp_c}&deg;</span>
                <span className={s.condition}>{temp.condition}</span>
                <span className={s.MaxMinTemp}>День:{temp.H}&deg;  Ночь:{temp.L}&deg;</span>
        </div>
    );
};

export default HomeTitle;