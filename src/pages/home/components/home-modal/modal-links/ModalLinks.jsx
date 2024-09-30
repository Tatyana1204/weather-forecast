import React from 'react';
import s from "../HomeModal.module.scss";
import {Link} from "react-router-dom";
import location from "../../../../../image/Location.svg";
import addMore from "../../../../../image/addMore.svg";
import burger from "../../../../../image/burger.svg";

const ModalLinks = () => {
    return (
        <div className={s.links}>
            <Link to='/details'><img src={location} alt="Найти город"/></Link>
            <Link to='/hourse'><img src={addMore} alt="add" className={s.modal_img}/></Link>
            <Link to='/hourse'><img src={burger} alt="детали"/></Link>
        </div>
    );
};

export default ModalLinks;