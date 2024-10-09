import React from "react";
import s from "./ModalListDay.module.scss";
import { useAppSelector } from "../../../../../hooks/hook";
import ModalItem from "../modal-item/ModalItem";

const ModalListDay = () => {
  const days: [] = useAppSelector((state) => state.weather.weather.days);

  return (
    <div className={s.modal_list}>
      {days.map(
        (day: {
          date: string;
          day: { avgtemp_c: number; condition: { text: string; icon: string } };
        }) => (
          <ModalItem
            condition={day.day.condition.text}
            time={`${day.date.slice(8, 10)}.${day.date.slice(5, 7)}`}
            temp={Math.round(day.day.avgtemp_c)}
            key={`${day.date.slice(8, 10)}.${day.date.slice(5, 7)}`}
            icon={day.day.condition.icon}
          />
        ),
      )}
    </div>
  );
};

export default ModalListDay;
