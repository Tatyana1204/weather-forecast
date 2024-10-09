import React from "react";
import { useAppSelector } from "../../../hooks/hook";
import s from "../../home/components/Home.module.scss";
import ss from "../Details.module.scss";
import { Link } from "react-router-dom";

const TitleDetails = () => {
  const temp: {
    temp_c: number;
    city: string;
    condition: string;
  } = useAppSelector((state) => state.weather.weather);
  return (
    <div>
      <Link to="/" className={ss.link_modal}>
        <span className={ss.link}>&lt; На главную</span>
      </Link>
      <div className={ss.title}>
        <span className={s.city}>{temp.city}</span>
        <span className={s.condition}>
          {temp.temp_c}&deg; &#10072; {temp.condition}
        </span>
      </div>
    </div>
  );
};

export default TitleDetails;
