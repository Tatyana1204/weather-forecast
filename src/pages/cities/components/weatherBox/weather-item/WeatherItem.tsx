import React from "react";
import s from "./WeatherItem.module.scss";
import rainImg from "../../../../../image/Sun-cloud-angled-rain.png";
import partlyImg from "../../../../../image/Fast-wind.png";
import sunImg from "../../../../../image/sun.png";
import midRainImg from "../../../../../image/Sun-cloud-mid-rain.png";
import tornadoImg from "../../../../../image/Tornado.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../../hooks/hook";
import { getAPI } from "../../../../../store/weatherSlice";

interface WeatherItemProps {
  city: string;
  temp_c: string;
  H: string;
  L: string;
  condition: string;
}

const WeatherItem = (props: WeatherItemProps) => {
  const dispatch = useAppDispatch();

  let imageUrl: string | undefined;
  // @ts-ignore
  switch (props.condition) {
    case "Ясно":
      imageUrl = sunImg;
      break;
    case "Пасмурно":
      imageUrl = partlyImg;
      break;
    case "Дымка":
      imageUrl = partlyImg;
      break;
    case "Переменная облачность":
      imageUrl = partlyImg;
      break;
    case "Солнечно":
      imageUrl = sunImg;
      break;
    case "Небольшой дождь":
      imageUrl = midRainImg;
      break;
    case "Торнадо":
      imageUrl = tornadoImg;
      break;
    default:
      imageUrl = rainImg;
      break;
  }

  return (
    <div className={s.weatherItem}>
      <Link
        to="/"
        className={s.link}
        onClick={(event: React.MouseEvent) => dispatch(getAPI(props.city))}
      >
        <div className={s.weatherItemData}>
          <div className={s.weatherItemTop}>
            <span className={s.textTemp}>{props.temp_c}&deg;</span>
            <img className={s.weatherImg} src={imageUrl} alt="погода" />
          </div>
          <div className={s.weatherItemHL}>
            <span className={s.hL}>
              H: {props.H}&deg; L: {props.L}&deg;
            </span>
          </div>
          <div className={s.weatherItemBottom}>
            <span className={s.city}>{props.city}</span>
            <span className={s.weatherDetailText}>{props.condition}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WeatherItem;
