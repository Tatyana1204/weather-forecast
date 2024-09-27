import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

let result:{
    temp_c: number;
    city: string;
    condition: string;
    H: number;
    L: number;
};

export const getAPI = createAsyncThunk(
    'weather/getAPI',
    async function (ipAdress:string) {
        try{
            await axios
                .get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_PRIVATE_KEY}&q=${ipAdress}&days=1&aqi=no&alerts=no&lang=ru`)
                .then(({data}) => {
                    // console.log(data);
                    // console.log(ipAdress)
                    result = {
                        temp_c: Math.round(data.current.temp_c),
                        city: data.location.name,
                        condition: data.current.condition.text,
                        H: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
                        L: Math.round(data.forecast.forecastday[0].day.mintemp_c),
                    };
                });
        }
        catch(error){
            console.log('NO IP: ', Error)
        }
    }
)
export interface WeatherState {
    status: string;
    error: string | null;
    weather: {
        temp_c: number;
        city: string;
        condition: string;
        H: number;
        L: number;
    }
    favoriteCities: string [];
    citiesCards: object;
}

const initialState: WeatherState = {
    status: '',
    error: null,
    weather: {
        temp_c: 0,
        city: '',
        condition: '',
        H: 0,
        L: 0,
    },
    favoriteCities: ['moscow', 'london', 'paris'],
    citiesCards: {},
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getAPI.pending, (state: WeatherState) => {
            state.status = 'loading';
        })
        builder.addCase(getAPI.fulfilled, (state: WeatherState)=>{
            state.status = 'fulfilled';
            state.weather = result;
            state.error = "no";
        })
        builder.addCase(getAPI.rejected, (state:WeatherState) => {
            state.status = 'rejected';
        })
},
})

// Action creators are generated for each case reducer function
export const { } = weatherSlice.actions

export default weatherSlice.reducer