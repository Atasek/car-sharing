import React, {useEffect, useState} from "react";
import "./Model.scss"
import {getCars} from "../../../../api/order";

// 1) когда компонент рождается
// 2) когда у компонента обновляются props
// 3) когда компонент уничтожается


export default function Model() {
    const [originCars, setOriginCars] = useState([]);
    const [cars, setCars] = useState([]);
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
        <div className="radio-item">
            <input checked={sortType === 'Все модели'} className="radio-item__input" onChange={() => sortCars('Все модели')} type="radio"/>
            <label htmlFor="contactChoice1">Все модели</label>
            <input checked={sortType === 'Эконом'} className="radio-item__input" onChange={() => sortCars('Эконом')}  type="radio"/>
            <label htmlFor="contactChoice1">Эконом</label>
            <input checked={sortType === 'Премиум'} className="radio-item__input" onChange={() => sortCars('Премиум')}  type="radio"/>
            <label htmlFor="contactChoice1">Премиум</label>
        </div>
        <div className="catalog">
            <div className="catalog__car">{cars.map((car) => <div key={car.id}><img className="img-car"
                src={`http://api-factory.simbirsoft1.com${car.thumbnail.path}`}/>{car.name}</div>)}</div>
        </div>
    </div>
}

/*default function AllCars(){
    {cars.map((car) =><li key={car.id}><img src={`http://api-factory.simbirsoft1.com${car.thumbnail.path}`}/>{car.name}</li>)}
}

*/
