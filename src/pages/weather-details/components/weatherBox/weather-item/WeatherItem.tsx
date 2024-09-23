import React from 'react';
import s from './WeatherItem.module.scss'
import weatherImg from '../../../../../image/Sun-cloud-angled-rain.png'
interface Props {

}
const WeatherItem = () => {
    return (
            <div className={s.weatherItem}>
                <div className={s.weatherItemData}>
                    <div className={s.weatherItemTop}>
                        <span className={s.textTemp}>19</span>
                        <img src={weatherImg} alt="cart"/>
                    </div>
                    <div className={s.weatherItemBottom}>
                        <div className={s.weatherItemText}>
                            <span className={s.hL}>H:24°  L:18°</span>
                            <span className={s.city}>Montreal, Canada</span>
                        </div>
                        <span className={s.weatherDetailText}>Mid Rain</span>
                    </div>
                </div>
            </div>
    );
};

export default WeatherItem;