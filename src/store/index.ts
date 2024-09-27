import { configureStore } from '@reduxjs/toolkit'
import WeatherSlice from "./weatherSlice";
import WeatherCitiesSlice from "./weatherCitiesSlice";

export const store = configureStore({
    reducer: {
        weather: WeatherSlice,
        weatherCities: WeatherCitiesSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch