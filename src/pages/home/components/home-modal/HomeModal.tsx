import React from 'react';
import s from "./HomeModal.module.scss";
import {Link, NavLink, Outlet} from "react-router-dom";
import {useAppDispatch} from "../../../../hooks/hook";
import ModalLinks from "./modal-links/ModalLinks";


const HomeModal = () => {
const dispatch = useAppDispatch();
    return (
        <div className={s.modal}>
            <div className={s.modal_nav}>
                <Link to='/' className={s.link_modal}><span>По часам</span></Link>
                <Link to='/day' className={s.link_modal}><span>По дням</span></Link>
            </div>
            <Outlet/>
            <ModalLinks/>
        </div>
    );
};

export default HomeModal;