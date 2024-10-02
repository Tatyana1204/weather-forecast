import React from 'react';
import s from "./ModalListHour.module.scss";
import {useAppSelector} from "../../../../../hooks/hook";
import ModalItem from "../modal-item/ModalItem";

const ModalListHour = () => {

    let currentTime : number = new Date().getHours();
    const hours : [] = useAppSelector(state=> state.weather.weather.hours);

    // @ts-ignore
    const nowHours : [] = hours.filter((hour: {condition:{icon:string}, time:string, temp_c:string }) => {
        if (Number(hour.time.slice(11, 13)) >= (currentTime - 2)) {
            return hour;
        }
        else {
            return null;
        }
    })
    return (
        <div className={s.modal_list}>
            {nowHours.map((hour: {condition:{text:string}, time:string, temp_c:number }) =>
                <ModalItem
                    condition={hour.condition.text}
                    time={hour.time.slice(11)}
                    temp ={Math.round(hour.temp_c)}
                    key={hour.time.slice(11, 13)}
                />
            )}
        </div>
    );
};

export default ModalListHour;