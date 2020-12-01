import React, {useEffect, useState} from "react";
import "./Geolocation.scss"
import {ReactComponent as InputCancelIcon} from "../../../../img/CancelVector.svg";
import OrderInfo from "../OrderInfo";
import {STEPS} from "../../step-switcher/StepSwitcher";
import {getCities} from "../../../../api/order";
import Select from "react-select";
import AsyncSelect from 'react-select/async';


export default function Geolocation(props) {
    const [city, setCity] = useState('');
    const [distributionPoint, setDistributionPoint] = useState('');
    const [cities, setCities] = useState(null);

    useEffect(async () => {
        const responseCities = await getCities();
        const cities = responseCities.data.map((city) => ({
            value: city.id,
            label: city.name
        }));
       setCities(cities.data);
    }, []);

    async function getCitiesForSelect() {
        const responseCities = await getCities();
        return responseCities.data.map((city) => ({
            value: city.id,
            label: city.name
        }));
    }

    function setCityValue(value) {
        // TODO
    }

    return <div className='geolocation'>
        <div className='geolocation__main'>
            <div className="pick-point">
                <div className='pick-point__item'>
                    <div className='pick-point__item-type'>Город</div>
                    <AsyncSelect
                        styles={{width: '200px'}}
                        cacheOptions
                        defaultOptions
                        loadOptions={getCitiesForSelect}
                        placeholder='Выбрать...'
                    />
                    <button className="pick-point__item-cancel">
                        <InputCancelIcon/>
                    </button>
                </div>
                <div className='pick-point__item'>
                    <div className='pick-point__item-type'>Пункт выдачи</div>
                    <input className='pick-point__item-input'
                           type="text"
                           placeholder="Начните вводить пункт..."
                           value={city}
                           onChange={event => setCity(event.target.value)}
                    />
                    <button className="pick-point__item-cancel">
                        <InputCancelIcon/>
                    </button>
                </div>
                <div className='pick-point__map'>
                    <div className='pick-point__map-choice'>Выбрать на карте:</div>
                    <div className='img-map'>
                    </div>
                </div>
            </div>
        </div>
        <div className='order__description'>
            <OrderInfo step={STEPS.LOCATION} changeStep={() => props.changeStep()}/>
        </div>
    </div>;
}
