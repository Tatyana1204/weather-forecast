import React from "react";
import s from "./Details.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hook";
import TitleDetails from "./title/TitleDetails";
import Loader from "../../loader/loader";
import DetailsBox from "./details-box/DetailsBox";

const Details = () => {
  const loader: string = useAppSelector((state) => state.weather.status);

  if (loader === "fulfilled") {
    return (
      <div className={s.details}>
        <TitleDetails />
        <div className={s.modal_nav}>
          <Link to="/details/" className={s.link_modal}>
            <span>По часам</span>
          </Link>
          <Link to="/details/day" className={s.link_modal}>
            <span>По дням</span>
          </Link>
        </div>
        <Outlet />
        <DetailsBox />
      </div>
    );
  } else {
    return (
      <div className={s.home}>
        <Loader />
      </div>
    );
  }
};

export default Details;
