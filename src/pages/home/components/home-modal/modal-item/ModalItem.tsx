import React from 'react';
import s from "../modal-list-day/ModalListDay.module.scss";
import sunImg from "../../../../../image/sun.png";
import partlyImg from "../../../../../image/Fast-wind.png";
import midRainImg from "../../../../../image/Sun-cloud-mid-rain.png";
import tornadoImg from "../../../../../image/Tornado.png";
import rainImg from "../../../../../image/Sun-cloud-angled-rain.png";
import nightImg from "../../../../../image/night.png";

interface ModalItemProps {
    temp:number,
    key:string,
    condition:string,
    time:string,

}

const ModalItem = (props:ModalItemProps) => {
    let imageUrl:string | undefined;
    // @ts-ignore
    switch (props.condition) {
        case 'Ясно':
            imageUrl =nightImg;
            break;
        case 'Пасмурно':
            imageUrl =  partlyImg;
            break;
        case 'Дымка':
            imageUrl =  partlyImg;
            break;
        case 'Переменная облачность':
            imageUrl =  partlyImg;
            break;
        case 'Солнечно':
            imageUrl =  sunImg;
            break;
        case 'Небольшой дождь':
            imageUrl =  midRainImg;
            break;
        case 'Торнадо':
            imageUrl = tornadoImg;
            break;
        default:
            imageUrl = rainImg;
            break;
    }
    return (
        <div className={s.modal_item}>
            <span>{props.time}</span>
            <img src={imageUrl} alt={props.condition}/>
            <span>{props.temp} &deg;</span>
        </div>
    );
};

export default ModalItem;