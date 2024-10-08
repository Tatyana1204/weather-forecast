import React from 'react';
import s from "../modal-list-day/ModalListDay.module.scss";

interface ModalItemProps {
    temp:number,
    key:string,
    condition:string,
    time:string,
    icon:string,

}

const ModalItem = (props:ModalItemProps) => {
    return (
        <div className={s.modal_item}>
            <span>{props.time}</span>
            <img src={props.icon} alt={props.condition}/>
            <span>{props.temp} &deg;</span>
        </div>
    );
};

export default ModalItem;