import React, {useEffect, useState} from "react";
import "./Geolocation.scss"
import {getCities, getDistributionPoints} from "../../../../api/order";
import {selectStyles} from "./select-styles";
import MapStub from "../../../../img/map-stub.png";
import Select from "react-select";


export default function Geolocation(props) {
    const [city, setCity] = useState(null);
    const [cities, setCities] = useState(null);
    const [distributionPoint, setDistributionPoint] = useState(null);
    const [distributionPoints, setDistributionPoints] = useState(null);
    const [originDistributionPoints, setOriginDistributionPoints] = useState(null);

    useEffect(() => {
        (async () => {
            setCities(await getCitiesForSelect());
            const distributionPoints = await getDistributionPointsForSelect();
            setOriginDistributionPoints(distributionPoints);
            setDistributionPoints(distributionPoints);
        })()
    }, [])

    async function getCitiesForSelect() {
        const responseCities = await getCities();
        return responseCities.data.map((city) => ({
            value: city.id,
            label: city.name
        }));
    }

    async function getDistributionPointsForSelect() {
        const responseDistributionPoints = await getDistributionPoints();
        return responseDistributionPoints.data.map((distributionPoint) => ({
            value: distributionPoint.id,
            label: distributionPoint.name,
            cityId: distributionPoint.cityId.id,
            address: distributionPoint.address,
        }));
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
                    <Select
                        styles={selectStyles}
                        isClearable="true"
                        placeholder='Выбрать...'
                        onChange={(city) => changeCity(city)}
                        isDisabled={!cities && !distributionPoints}
                        options={cities}
                        value={city}
                    />
                </div>
                <div className='pick-point__item'>
                    <div className='pick-point__item-type'>Пункт выдачи</div>
                    <Select
                        styles={selectStyles}
                        isClearable="true"
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
