import React, {useEffect, useState} from "react";
import "./Model.scss"
import {getCars} from "../../../../api/order";
import OrderInfo from "../OrderInfo";
import {STEPS} from "../../step-switcher/StepSwitcher";


export default function Model(props) {
    const [originCars, setOriginCars] = useState([]);
    const [cars, setCars] = useState([]);
    cars.onload=()=> {
        this.sortCars()
    };
    const [sortType, setSortType] = useState('Все модели');

    useEffect(async () => {
        const result = await getCars();
        setOriginCars(result.data);
        setCars(originCars);
    }, []);

    function sortCars(type) {
        setSortType(type);
        if (type === 'Все модели') {
            setCars(originCars);
        } else {
            setCars(originCars.sort((carA, carB) => carA.categoryId.name === type ? 1 : -1));
        }
    }

    return <div className='model'>
        <div className="model__choose">
            <div className="radio">
            <div className="radio-item">
                <input checked={sortType === 'Все модели'} className="radio-item__input"
                       onChange={() => sortCars('Все модели')} type="radio"/>
                <label className="radio-item__label" htmlFor="contactChoice1">Все модели</label>
            </div>
                <div className="radio-item">
                <input checked={sortType === 'Эконом'} className="radio-item__input" onChange={() => sortCars('Эконом')}
                       type="radio"/>
                <label className="radio-item__label" htmlFor="contactChoice1">Эконом</label>
                </div>
                    <div className="radio-item">
                <input checked={sortType === 'Премиум'} className="radio-item__input"
                       onChange={() => sortCars('Премиум')} type="radio"/>
                <label className="radio-item__label"  htmlFor="contactChoice1">Премиум</label>
            </div>
            </div>
            <div className="catalog">

                <div className="catalog__car">
                    {cars.map((car) => <div className="car" key={car.id}>
                        <div className="catalog__car-des">
                            <div className="catalog__car-name"> {car.name}  </div>
                            <div className="catalog__car-price"> {car.priceMin} - {car.priceMax} </div>
                        </div>
                        <img className="img-car"
                             src={`http://api-factory.simbirsoft1.com${car.thumbnail.path}`}/>
                    </div>)}
                </div>
            </div>
        </div>
        <div className='order__description'>
            <OrderInfo step={STEPS.MODEL} changeStep={() => props.changeStep()}/>
        </div>
    </div>
}

/*default function AllCars(){
    {cars.map((car) =><li key={car.id}><img src={`http://api-factory.simbirsoft1.com${car.thumbnail.path}`}/>{car.name}</li>)}
}

*/
