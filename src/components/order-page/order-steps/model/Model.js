import React from "react";
import "./Model.scss"
import ApiCar from "../../RestApi";

export default function Model() {

    return <div className='model'>
        <div className="radio-item">
            <input className="radio-item__input" type="radio"/>
            <label htmlFor="contactChoice1">Все модели</label>
            <input className="radio-item__input" type="radio"/>
            <label htmlFor="contactChoice1">Эконом</label>
            <input className="radio-item__input" type="radio"/>
            <label htmlFor="contactChoice1">Премиум</label>
        </div>
        <div className="catalog">
            <ApiCar/>
        </div>
    </div>
        }