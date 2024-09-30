import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {getAPI} from "./store/weatherSlice";
import {useAppDispatch} from "./hooks/hook";
import Home from './pages/home/components/Home';
import WeatherDetails from "./pages/weather-details/WeatherDetails";
import ModalListHour from "./pages/home/components/home-modal/modal-list-hour/ModalListHour";
import ModalListDay from "./pages/home/components/home-modal/modal-list-day/ModalListDay";

function App() {

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

    return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}>
              <Route path='/hourse' element={<ModalListHour/>}/>
              <Route path='/day' element={<ModalListDay/>}/>
              <Route path='*' element={<ModalListHour/>}/>
              <Route/>
          </Route>
          <Route path="/details" element={<WeatherDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
