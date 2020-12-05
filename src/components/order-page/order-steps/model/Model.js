import React, {useEffect, useState} from "react";
import "./Model.scss"
import {getCars} from "../../../../api/order";


export default function Model(props) {
    const [originCars, setOriginCars] = useState([]);
    const [cars, setCars] = useState([]);
    const [sortType, setSortType] = useState('Все модели');
    const [car, setCar] = useState(null);

    useEffect(() => {
        async function fetchCars() {
            const result = await getCars();
            setOriginCars(result.data);
            setCars(result.data);
        }
        fetchCars();
    }, []);

    function sortCars(type) {
        setSortType(type);
        if (type === 'Все модели') {
            setCars(originCars);
        } else {
            setCars(originCars.sort((carA, carB) => carA.categoryId.name === type ? 1 : -1));
        }
    }

    function setCarToOrder(car) {
        setCar(car);
        props.changeOrder({car})
    }

    return <div className='catalog'>
            <div className="radio">
            <div className="radio__item">
                <input checked={sortType === 'Все модели'} className="radio__input"
                       onChange={() => sortCars('Все модели')} type="radio"/>
                <label className="radio__label">Все модели</label>
            </div>
                <div className="radio__item">
                <input checked={sortType === 'Эконом'} className="radio__input" onChange={() => sortCars('Эконом')}
                       type="radio"/>
                <label className="radio__label">Эконом</label>
                </div>
                    <div className="radio__item">
                <input checked={sortType === 'Премиум'} className="radio__input"
                       onChange={() => sortCars('Премиум')} type="radio"/>
                <label className="radio__label">Премиум</label>
            </div>
            </div>
                <div className="catalog__list">
                    {cars.map((currentCar) =>
                        <div onClick={() => setCarToOrder(currentCar)} className={car && currentCar.id === car.id ? "catalog__item_active catalog__item" : "catalog__item"} key={currentCar.id}>
                            <div className="catalog__description">
                                <span className="catalog__name"> {currentCar.name}</span>
                                <div className="catalog__price"> {currentCar.priceMin} - {currentCar.priceMax} ₽</div>
                            </div>
                            <img className="catalog__image"
                                 src={`http://api-factory.simbirsoft1.com${currentCar.thumbnail.path}`}
                                 alt={currentCar.name}/>
                        </div>
                    )}
                </div>
    </div>
}
