import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let result: {
  temp_c: number;
  city: string;
  condition: string;
  H: number;
  L: number;
  hours: [];
  days: [];
  air_quality: number;
  uv: string;
  sunrise: string;
  sunset: string;
  feels_like: string;
  humidity: string;
  dewPoint: string;
  visibility: string;
  precipitationAmount: string;
  precipitationAmount_tm: string;
  icon: string;
  pressure: string;
  wind: string;
  windDegree: string;
};

export const getAPI = createAsyncThunk(
  "weather/getAPI",
  async function (ipAdress: string) {
    try {
      await axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_PRIVATE_KEY}&q=${ipAdress}&days=5&aqi=yes&alerts=no&lang=ru`,
        )
        .then(({ data }) => {
          // console.log(data);
          // console.log(ipAdress)
          result = {
            temp_c: Math.round(data.current.temp_c),
            city: data.location.name,
            condition: data.current.condition.text,
            H: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
            L: Math.round(data.forecast.forecastday[0].day.mintemp_c),
            hours: data.forecast.forecastday[0].hour,
            days: data.forecast.forecastday,
            air_quality: data.current.air_quality["us-epa-index"],
            uv: data.current.uv,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
            feels_like: String(Math.round(data.current.feelslike_c) + "°"),
            humidity: data.current.humidity + "%",
            dewPoint: data.current.dewpoint_c + "°",
            visibility: data.current.vis_km + " км.",
            precipitationAmount: data.current.precip_mm + " мм.",
            precipitationAmount_tm:
              data.forecast.forecastday[1].day.totalprecip_mm + " мм.",
            icon: data.current.condition.icon,
            pressure: String(
              Math.round(data.current.pressure_mb * 0.750063755419211) + " мм.",
            ),
            wind: String(Math.round(data.current.wind_kph / 3.6) + "м/с"),
            windDegree:
              data.current.wind_degree + "°   " + data.current.wind_dir,
          };
          // console.log( result.hours)
        });
    } catch (error) {
      console.log("NO IP: ", Error);
    }
  },
);
export interface WeatherState {
  status: string;
  error: string | null;
  dayOrHour: string;
  weather: {
    temp_c: number;
    city: string;
    condition: string;
    H: number;
    L: number;
    hours: [];
    days: [];
    air_quality: number;
    uv: string;
    sunrise: string;
    sunset: string;
    feels_like: string;
    humidity: string;
    dewPoint: string;
    visibility: string;
    precipitationAmount: string;
    precipitationAmount_tm: string;
    icon: string;
    pressure: string;
    wind: string;
    windDegree: string;
  };
}

const initialState: WeatherState = {
  status: "",
  error: null,
  dayOrHour: "hour",
  weather: {
    temp_c: 0,
    city: "",
    condition: "",
    H: 0,
    L: 0,
    hours: [],
    days: [],
    air_quality: 0,
    uv: "",
    sunrise: "",
    sunset: "",
    feels_like: "",
    humidity: "",
    dewPoint: "",
    visibility: "",
    precipitationAmount: "",
    precipitationAmount_tm: "",
    icon: "",
    pressure: "",
    wind: "",
    windDegree: "",
  },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAPI.pending, (state: WeatherState) => {
      state.status = "loading";
    });
    builder.addCase(getAPI.fulfilled, (state: WeatherState) => {
      state.status = "fulfilled";
      state.weather = result;
      state.error = "no";
    });
    builder.addCase(getAPI.rejected, (state: WeatherState) => {
      state.status = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
