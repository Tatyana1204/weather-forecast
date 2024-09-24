import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import s from './Home.module.scss'
import axios from "axios";
import house from '../../../image/House.png'

interface Props {

}
const Home = (props: Props) => {
    const [ipAdress, setIpAdress] = React.useState('');
    const [temp, setTemp] = React.useState({temp:'', city:'', condition:'', H: '', L:''});

    const getVisitorIP = async () => {
        try{
           const response = await fetch ('https://api.ipify.org')
            const data = await response.text();
           setIpAdress(data);
        }
        catch(error){
            console.log('Failed to fetch IP: ',error);
        }
    }

    useEffect(()=> {
         getVisitorIP();
        const Debounce = setTimeout(()=>{
                axios
                    .get(`http://api.weatherapi.com/v1/forecast.json?key=073e7ffc05f44adfb2f113852243006&q=${ipAdress}&days=1&aqi=yes&alerts=yes`)
                    .then(data=>{
                        console.log(data.data);
                        setTemp({...temp, temp: data.data.current.temp_c, city: data.data.location.name, condition: data.data.current.condition.text, H: data.data.forecast.forecastday[0].day.maxtemp_c, L: data.data.forecast.forecastday[0].day.mintemp_c});
                    });
        }, 500);
        return () => clearTimeout(Debounce)
    }, [ipAdress])
    return (
        <div className={s.home}>
            <div className={s.firstTemp}>
                <span className={s.city}>{temp.city}</span>
                <span className={s.temp}>{temp.temp}&deg;</span>
                <span>{temp.condition}</span>
                <span className={s.MaxMinTemp}>H:{temp.H}  L:{temp.L}</span>
            </div>
            <div className={s.house}>
                <img src={house} alt=""/>
            </div>
            <div className={s.modal}>
                <Link to='/details'>детали</Link>
            </div>
        </div>
    );
};

export default Home;