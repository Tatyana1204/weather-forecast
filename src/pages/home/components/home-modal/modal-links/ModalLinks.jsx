import React from "react";
import s from "../HomeModal.module.scss";
import { Link } from "react-router-dom";
import location from "../../../../../image/Location.svg";
import addMore from "../../../../../image/addMore.svg";
import burger from "../../../../../image/burger.svg";
import { useAppDispatch } from "../../../../../hooks/hook";
import { getAPI } from "../../../../../store/weatherSlice";

const ModalLinks = () => {
  const dispatch = useAppDispatch();

  const getVisitorIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      return await response.text();
    } catch (error) {
      console.log("Failed to fetch IP: ", error);
      return Error(error);
    }
  };
  const getApi = async () => {
    getVisitorIP().then((r) => {
      dispatch(getAPI(r));
    });
  };
  return (
    <div className={s.links}>
      <button onClick={getApi} title="Найти меня">
        <img src={location} alt="Найти меня" />
      </button>
      <Link title="Детали погоды" to="/details">
        <img src={addMore} alt="Узнать больше" className={s.modal_img} />
      </Link>
      <Link to="/cities" title="Выбрать другой город">
        <img src={burger} alt="Другой город" />
      </Link>
    </div>
  );
};

export default ModalLinks;
