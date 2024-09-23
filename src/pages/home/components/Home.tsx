import React from 'react';
import {Link} from "react-router-dom";
import s from './Home.module.scss'

interface Props {

}
const Home = (props: Props) => {
    return (
        <div className={s.home}>
            home
            <Link to='/details'>детали</Link>
        </div>
    );
};

export default Home;