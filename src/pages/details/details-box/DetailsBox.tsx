import React from "react";
import s from "../Details.module.scss";
import QualityBox2 from "../quality-box 2/QualityBox2";
import QualityBox1 from "../quality-box 1/QualityBox1";
import sunset from "../../../image/sunset.svg";
import temperature from "../../../image/temperature.svg";
import wind from "../../../image/wind.svg";
import humidity from "../../../image/humidity.svg";
import visibility from "../../../image/visibility.svg";
import QualityBox1WithRange from "../quality-box 1 with range/QualityBox1WithRange";
import sun from "../../../image/sun.svg";
import rain from "../../../image/rain.svg";
import pressure from "../../../image/pressure.svg";
import airQuality from "../../../image/airQuality.svg";
import { useAppSelector } from "../../../hooks/hook";

const DetailsBox = () => {
  const detailsWeather = useAppSelector((state) => state.weather.weather);
  return (
    <div>
      <div className={s.detailsBox}>
        <QualityBox2
          title="Качество воздуха"
          value={detailsWeather.air_quality}
          image={airQuality}
        />
        <QualityBox1
          title={"Закат"}
          value={detailsWeather.sunset}
          image={sunset}
          condition={"Восход в " + detailsWeather.sunrise + "."}
        />
        <QualityBox1
          title={"Ощущается как"}
          value={detailsWeather.feels_like}
          image={temperature}
          condition="Примерно как фактически."
        />
        <QualityBox1
          title={"Ветер"}
          value={detailsWeather.wind}
          image={wind}
          condition={"Направление: " + detailsWeather.windDegree + "."}
        />
        <QualityBox1
          title={"Влажность"}
          value={detailsWeather.humidity}
          image={humidity}
          condition={"Точка росы сейчас: " + detailsWeather.dewPoint + "."}
        />
        <QualityBox1
          title={"Видимость"}
          value={detailsWeather.visibility}
          image={visibility}
          condition="Хорошая видимость."
        />
        <QualityBox1WithRange
          title={"УФ-Индекс"}
          value={detailsWeather.uv}
          image={sun}
          max={12}
        />
        <QualityBox1
          title={"Осадки"}
          value={detailsWeather.precipitationAmount}
          image={rain}
          condition={
            "Завтра ожидается " + detailsWeather.precipitationAmount_tm
          }
        />
        <QualityBox1
          title={"Давление"}
          value={detailsWeather.pressure}
          image={pressure}
          condition="ртутного столба."
        />
      </div>
    </div>
  );
};

export default DetailsBox;
