import React from 'react';
import s from "../HomeModal.module.scss";
import {Link} from "react-router-dom";
import location from "../../../../../image/Location.svg";
import addMore from "../../../../../image/addMore.svg";
import burger from "../../../../../image/burger.svg";
import {useAppDispatch} from "../../../../../hooks/hook";
import {getAPI} from "../../../../../store/weatherSlice";

const ModalLinks = () => {

    const dispatch = useAppDispatch();

    const getVisitorIP = async () => {
        try{
            const response = await fetch ('https://api.ipify.org')
            return await response.text();
        }
        catch(error){
            console.log('Failed to fetch IP: ',error);
            return Error(error);
        }
    }
    const getApi = async () => {
            getVisitorIP().then(r => {
                dispatch(getAPI(r));
                }
            );
    }
    return (
        <div className={s.links}>
            <button onClick={getApi} title='Найти меня'><img src={location} alt="Найти город"/></button>
            <Link title='Выбрать другой город' to='/details'><img src={addMore} alt="add" className={s.modal_img}/></Link>
            <Link to='/hourse'><img src={burger} alt="детали"/></Link>
        </div>
    );
};

export default ModalLinks;