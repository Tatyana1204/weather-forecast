import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

async function getWeatherCity(ipAdress:string) {
    try{
        return axios
            .get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_PRIVATE_KEY}&q=${ipAdress}&days=1&aqi=no&alerts=no&lang=ru`)
            .then(({data}) => {
                    // console.log(data);
                    return {
                        temp_c: Math.round(data.current.temp_c),
                        city: data.location.name,
                        condition: data.current.condition.text,
                        H: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
                        L: Math.round(data.forecast.forecastday[0].day.mintemp_c),
                    };
            });
    }
    catch(error){
        console.log('NO city: ', error)
        return null;
    }
}
let cities : [];
export const getCity = createAsyncThunk(
    'weatherCities/getCity',
    async function (address:string){
        try {
            const response = await getWeatherCity(address);
            console.log(response);
            // @ts-ignore
            cities = response;
        }
        catch (e){
            console.log('error:', e)
            return null;
        }
    }
)
export const getAPICities = createAsyncThunk(
    'weatherCities/getAPICities',
    async function  () {
        try{

            const promisesCities = [await getWeatherCity('Москва'),
                await getWeatherCity('Лондон'),
                await getWeatherCity('Санкт-Петербург'),
                await getWeatherCity('Монреаль'),
                await getWeatherCity('Париж')];

            Promise.allSettled(promisesCities).then((results) =>{
                // @ts-ignore
                cities = results.map(city => {
                    if (city.status === "fulfilled") {
                        // console.log(city.value)
                        return city.value
                    }
                });
                // console.log(citiesResult);
                }
            );
        }
        catch(error){
            console.log('NO cities ', Error)
            return `Error: ${error}`
        }
    }
)
export interface WeatherState {
    search:string;
status: string;
error: string;
    weathers: [{},{},{},{},{}],
}

const initialState: WeatherState = {
    search:'',
    status: '',
    error: '',
    weathers: [{},{},{},{},{}],
}

export const weatherCitiesSlice = createSlice({
    name: 'weatherCities',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAPICities.pending, (state: WeatherState) => {
            state.status = 'loading';
            // console.log('loading')
        })
        builder.addCase(getAPICities.fulfilled, (state: WeatherState) => {
            state.status = 'fulfilled';
            state.error = "no";
            // @ts-ignore
            state.weathers = cities;
            // console.log('loaded')
        })
        builder.addCase(getAPICities.rejected, (state: WeatherState) => {
            state.status = 'rejected';
        })
        builder.addCase(getCity.pending, (state: WeatherState) => {
            state.search = 'loading';
            // console.log('loading')
        })
        builder.addCase(getCity.fulfilled, (state: WeatherState) => {
            state.search = 'fulfilled';
            // @ts-ignore
            state.weathers = cities;
            console.log(cities, state.weathers)
            // console.log('loaded')
        })
        builder.addCase(getCity.rejected, (state: WeatherState) => {
            state.search =  'rejected';
        })

    },
})

// Action creators are generated for each case reducer function
export const { } = weatherCitiesSlice.actions

export default weatherCitiesSlice.reducer