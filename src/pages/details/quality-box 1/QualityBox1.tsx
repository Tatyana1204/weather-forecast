import React from "react";
import s from "../Details.module.scss";

interface QualityBox1Props {
  title: string;
  value: string;
  image: string;
  condition: string;
}

const QualityBox1 = (props: QualityBox1Props) => {
  return (
    <div>
      <div className={s.qualityItem1}>
        <div className={s.logoBox}>
          <img src={props.image} alt="Лого" className={s.image_quality} />
          <span>{props.title}</span>
        </div>
        <span className={s.titleBox1}>{props.value}</span>
        <span className={s.conditionBox}>{props.condition}</span>
      </div>
    </div>
  );
};

export default QualityBox1;
