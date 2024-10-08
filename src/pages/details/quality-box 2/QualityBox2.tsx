import React from 'react';
import s from '../Details.module.scss'
interface QualityBoxProps {
    title:string;
    value:number;
    image:string;
}
const QualityBox2 = (props: QualityBoxProps) => {
    let airQualityValue: string;
    switch(props.value) {
        case 1:
            airQualityValue = 'Хорошее. Можно проводить время на улице без ограничений.'
            break;
        case 2:
            airQualityValue = 'Среднее. В целом является приемлемым для большинства людей. '
            break;
        case 3:
            airQualityValue = 'Cлегка вредное. Загрязнение воздуха достигло высокого уровня'
            break;
        case 4:
            airQualityValue = 'Вредное. Ограничьте пребывание на улице'
            break;
        case 5:
            airQualityValue = 'Очень вредное. Рекомендуется оставаться в помещении'
            break;
        case 6:
            airQualityValue = 'Опасное. Любое пребывание на улице может привести к серьезным осложнениям'
            break;
        default:
            airQualityValue= '';
            break;
    }
    return (
        <div className={s.qualityItem2}>
            <div className={s.logoBox}>
                <img src={props.image} alt="Лого" className={s.image_quality}/>
                <span>{props.title}</span>

            </div>
            <span className={s.titleBox}>{props.value} - {airQualityValue}</span>
            <input type="range" min="0" max="6" step="1" value={props.value} className={s.rangeInput} readOnly={true}/>
        </div>
    );
};

export default QualityBox2;