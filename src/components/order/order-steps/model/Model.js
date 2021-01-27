import React, {useEffect, useState} from "react";
import "./Model.scss"
import {getCars} from "../../../../api/order";
import RadioInput from "../../../common/form-parts/radio/Radio";
import {formatPriceNumber} from "../../../../helpers";
import {CORS_URL} from "../../../../api/common";


export default function Model(props) {
    const [originCars, setOriginCars] = useState([]);
    const [cars, setCars] = useState([]);
    const [sortType, setSortType] = useState('Все модели');
    const [car, setCar] = useState(null);

    async function fetchCars() {
        const result = await getCars();
        setOriginCars(result.data);
        setCars(result.data);
    }

    useEffect(() => {
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
            <div className="catalog__radio">
                <RadioInput
                    checked={sortType === 'Все модели'}
                    value="Все модели"
                    onChange={() => sortCars('Все модели')}
                />
                <RadioInput
                    checked={sortType === 'Эконом'}
                    value="Эконом"
                    onChange={() => sortCars('Эконом')}
                />
                <RadioInput
                    checked={sortType === 'Премиум'}
                    value="Премиум"
                    onChange={() => sortCars('Премиум')}
                />
            </div>
                <div className="catalog__list">
                    {cars.map((currentCar) =>
                        <div onClick={() => setCarToOrder(currentCar)} className={car && currentCar.id === car.id ? "catalog__item_active catalog__item" : "catalog__item"} key={currentCar.id}>
                            <div className="catalog__description">
                                <span className="catalog__name"> {currentCar.name}</span>
                                <div className="catalog__price"> {formatPriceNumber(currentCar.priceMin)} - {formatPriceNumber(currentCar.priceMax)} ₽</div>
                            </div>
                            <img className="catalog__image"
                                 src={(currentCar.thumbnail.path.includes('base64') && currentCar.thumbnail.path) ||
                                 `${CORS_URL}http://api-factory.simbirsoft1.com${currentCar.thumbnail.path}`}
                                 referrerPolicy='origin'
                                 crossOrigin='anonymous'
                                 alt={currentCar.name}/>
                        </div>
                    )}
                </div>
    </div>
}
