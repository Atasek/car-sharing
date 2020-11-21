import React, {useEffect, useState} from "react";
import "./Model.scss"
import {getCars} from "../../../../api/order";

export default function Model() {
    const [cars, setCars] = useState([]);

    useEffect(async () => {
        const result = await getCars();
        setCars(result.data);
    });

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
        </div>
    </div>
        }