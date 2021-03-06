import "./CityCard.scss";
import {cn} from "../../../../helpers";
import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {getCityByID} from "../../../../api/order";
import {Alert} from "../../../common/alert/Alert";
import {Input} from "../../../common/form-parts/input/Input";
import {Button} from "../../../common/button/Button";
import {createCity, deleteCity, updateCity} from "../../../../api/admin/entities/city";

export function CityCard() {
    const cityCardCn = cn('city-card');
    const history = useHistory();
    const {id} = useParams();

    const [city, setCity] = useState({name: ''});
    const [isAlertShown, setIsAlertShown] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        if (id) {
            async function loadCity() {
                const city = (await getCityByID(id)).data;
                setCity(city);
            }

            loadCity();
        }
    }, [id])

    async function deleteCard() {
        await deleteCity(id);
        setCity({name: ''});
        history.push('/admin/city');
    }

    async function saveCard() {
        if (id) {
            async function updateCurrentCity() {
                await updateCity(id, city);
                showSavedCarAlert();
            }

            updateCurrentCity();
        } else {
            async function createCurrentCity() {
                const result = await createCity(city);
                showSavedCarAlert();
                history.push(`/admin/city/${result.data.id}`);
            }

            createCurrentCity();
        }
    }

    function showSavedCarAlert() {
        setAlertMessage('✓ Успех! Город сохранен');
        setIsAlertShown(true);
    }

    return (
        <div className={cityCardCn()}>
            <Alert
                message={alertMessage}
                isShown={isAlertShown}
                onClose={() => setIsAlertShown(false)}
            />
            <div className={cityCardCn('title')}>{id ? 'Редактирование города' : 'Добавление города'}</div>
            <div className={cityCardCn('content')}>
                <div className={cityCardCn('field')}>
                    <Input
                        label="Название города"
                        onChange={name => setCity({name: name})}
                        value={city.name}
                        width="320px"
                    />
                </div>
                <div className={cityCardCn('buttons')}>
                    <div className={cityCardCn('save-and-cancel-buttons')}>
                        <Button
                            label='Сохранить'
                            disabled={!city.name || city.name.length === 0}
                            onClick={saveCard}/>
                        <div className={cityCardCn('cancel-button')}>
                            <Button
                                label='Отменить'
                                onClick={history.goBack}
                                styles={{
                                    color: '#3D5170',
                                    backgroundColor: "#E9ECEF",
                                    borderColor: '#E9ECEF',
                                }}
                            />
                        </div>
                    </div>
                    <Button
                        label='Удалить'
                        onClick={deleteCard}
                        styles={{
                            backgroundColor: "#CB3656",
                            borderColor: "#CB3656",
                            visibility: !id && 'hidden'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}