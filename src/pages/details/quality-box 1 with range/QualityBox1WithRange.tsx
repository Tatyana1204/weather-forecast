import React from 'react';
import s from "../Details.module.scss";
interface QualityBox1Props {
    title:string;
    value:string;
    image:string;
    max:number;
}

const QualityBox1WithRange = (props: QualityBox1Props) => {
        let conditionUv:string;
        switch (Number(props.value)) {
            case 1:
            case 2:
            case 3:
                conditionUv = 'Низкий класс опасности'
                break;
            case 4:
                case 5:
                    case 6:
                conditionUv = 'Средний класс опасности'
                break;
            case 7:
                case 8:
                    case 9:
                conditionUv = 'Высокий класс опасности'
                break;
            case 10: case 11: case 12:
                conditionUv = 'Экстремальный класс опасности'
                break;
            default:
                conditionUv = ''
                break;
        }
        return (
            <div>
                <div className={s.qualityItem1}>
                    <div className={s.logoBox}>
                        <img src={props.image} alt="Лого" className={s.image_quality}/>
                        <span>{props.title}</span>
                    </div>
                    <span className={s.titleBoxRange}>{props.value}</span>
                    <input type="range" min="0" max={props.max} step="1" value={props.value}
                           className={s.rangeInputMini}
                           readOnly={true}/>
                    <span className={s.conditionBoxRange}>{conditionUv}</span>
                </div>
            </div>
        );
};

export default QualityBox1WithRange;