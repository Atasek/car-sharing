import React, {useEffect, useState} from "react";
import "./Geolocation.scss"
import {
    getCitiesForSelect,
    getDistributionPointsForSelect
} from "../../../../api/order";
import MapStub from "../../../../img/map-stub.png";
import CustomSelect from "../../../common/select/Select";


export default function Geolocation(props) {
    const [city, setCity] = useState(null);
    const [cities, setCities] = useState(null);
    const [distributionPoint, setDistributionPoint] = useState(null);
    const [distributionPoints, setDistributionPoints] = useState(null);
    const [originDistributionPoints, setOriginDistributionPoints] = useState(null);

    useEffect(() => {
        initCitiesAndPoints();
    }, [])

    async function initCitiesAndPoints() {
        setCities(await getCitiesForSelect());
        const distributionPoints = await getDistributionPointsForSelect();
        setOriginDistributionPoints(distributionPoints);
        setDistributionPoints(distributionPoints);
    }

    function changeCity(city) {
        setCity(city);
        props.changeOrder({city, distributionPoint})
        if (city) {
            setDistributionPoint(null);
            const filteredDistributionPointsByCity = originDistributionPoints.filter((distributionPoint) =>
                distributionPoint.cityId === city.value
            );
            setDistributionPoints(filteredDistributionPointsByCity);
        } else {
            setDistributionPoints(originDistributionPoints);
        }
    }

    return <div className='geolocation'>
        <div className='geolocation__main'>
            <div className="pick-point">
                <div className='pick-point__item pick-point__item_first'>
                    <div className='pick-point__item-type'>Город</div>
                    <CustomSelect
                        placeholder='Выбрать...'
                        onChange={(city) => changeCity(city)}
                        isDisabled={!cities && !distributionPoints}
                        options={cities}
                        value={city}
                    />
                </div>
                <div className='pick-point__item'>
                    <div className='pick-point__item-type'>Пункт выдачи</div>
                    <CustomSelect
                        options={distributionPoints}
                        isDisabled={!distributionPoints}
                        placeholder='Начните вводить пункт...'
                        onChange={(distributionPoint) => {
                            setDistributionPoint(distributionPoint);
                            props.changeOrder({city, distributionPoint})
                        }}
                        value={distributionPoint}
                    />
                </div>
                <div className='pick-point__map'>
                    <div className='pick-point__map-choice'>Выбрать на карте:</div>
                    <img src={MapStub} alt="map stub"/>
                </div>
            </div>
        </div>
    </div>;
}
