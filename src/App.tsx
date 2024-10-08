import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {getAPI} from "./store/weatherSlice";
import {useAppDispatch} from "./hooks/hook";
import Home from './pages/home/components/Home';
import ModalListHour from "./pages/home/components/home-modal/modal-list-hour/ModalListHour";
import ModalListDay from "./pages/home/components/home-modal/modal-list-day/ModalListDay";
import WeatherCities from "./pages/cities/WeatherCities";
import Details from "./pages/details/Details";
import useWindowSize from './hooks/useWindowSize';

function App() {
const size = useWindowSize();
console.log(size);
    const [ipAdress, setIpAdress] = React.useState<string>('');
    const dispatch = useAppDispatch();

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
            getVisitorIP().then(r => {
                    if (ipAdress !== '') {
                        dispatch(getAPI(ipAdress))
                    }
                }
            );
    }, [ipAdress])
    if(size[0] <= 430) {
        return (
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Home/>}>
                        <Route path='/' element={<ModalListHour/>}/>
                        <Route path='/day' element={<ModalListDay/>}/>
                        <Route path='*' element={<ModalListHour/>}/>
                        <Route/>
                    </Route>
                    <Route path="/cities" element={<WeatherCities/>}/>
                    <Route path="/details" element={<Details/>}>
                        <Route path='/details/' element={<ModalListHour/>}/>
                        <Route path='/details/day' element={<ModalListDay/>}/>
                        <Route path='*' element={<ModalListHour/>}/>
                    </Route>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </div>
        );
    }
    else {
        return (
            <div className='appDesc'>
                <div className='modal'>
                    <span>К сожалению, сайт предназначен для мобильных устройств.</span>
                    <span>Перейдите в мобильную версию</span>
                </div>
            </div>
        )
    }
}

export default App;
