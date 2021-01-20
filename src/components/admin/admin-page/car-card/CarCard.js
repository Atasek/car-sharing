import {cn} from "../../../../helpers";
import React, {useEffect, useState} from "react";
import "./CarCard.scss";
import {AdminCustomButton} from "../../components/admin-custom-button/AdminCustomButton";
import {useHistory, useParams} from "react-router-dom";
import CatStubImage from "../../../../img/covered-car.png";
import {getCarImage} from "../../../../api/common";
import {AdminCustomFileInput} from "../../components/admin-custom-file-input/AdminCustomFileInput";
import {ProgressBar} from "../../components/progress-bar/ProgressBar";
import {AdminCustomTextarea} from "../../components/admin-custom-textarea/AdminCustomTextarea";
import {AdminCustomInput} from "../../components/admin-custom-input/AdminCustomInput";
import CustomSelect from "../../../common/select/Select";
import {getCarByID, getCategoriesForSelect} from "../../../../api/order";
import {AdminPicker} from "../../components/admin-picker/AdminPicker";
import {createCar, deleteCar, updateCar} from "../../../../api/admin";
import {Alert} from "../../components/alert/Alert";

export const categoriesStyles = {
    container: (styles) => (
        {
            ...styles,
            width: "320px",
            margin: "0 20px 28px 0",
        }
    ),
    control: (styles) => (
        {
            ...styles,
            height: 30,
            minHeight: 30,
            cursor: "pointer",
            backgroundColor: "white",
            fontWeight: 300,
            fontSize: 14,
            borderColor: `#BECAD6`,
            boxShadow: "none !important",
            ":hover": {
                borderColor: `#BECAD6`
            },
            ":focus": {
                borderColor: `#BECAD6`
            },
        }
    ),
    input: (styles) => (
        {
            ...styles,
            padding: 0,
            margin: 0,
            fontWeight: 300,
            fontSize: 14,
        }
    ),
    dropdownIndicator: (styles) => (
        {
            ...styles,
            padding: 4
        }
    ),
    indicatorSeparator: (styles) => (
        {
            display: `none`
        }
    ),
    placeholder: (styles) => ({
        ...styles,
        fontSize: "11px",
        lineHeight: "13px",
    }),
    singleValue: (styles) => ({
        ...styles,

    }),
    clearIndicator: (styles) => (
        {
            display: `none`
        }
    )
}

export function CarCard() {
    const carCardCn = cn('car-card');
    const history = useHistory()
    const {id} = useParams();
    const [name, setName] = useState('');
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState({
        label: '',
        value: null,
    });
    const [colors, setColors] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [progressPercent, setProgressPercent] = useState(0);
    const [categoryIdOptions, setCategoryIdOptions] = useState(null);
    const [isAlertShown, setIsAlertShown] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        let currentProgress = 0;
        const fulledInFields = [
            !!name,
            !!description,
            !!priceMin,
            !!priceMax,
            !!thumbnail,
            !!categoryId.value,
            colors.length > 0,
        ]
        fulledInFields.filter(field => field).forEach(() => {
            currentProgress += 100 / fulledInFields.length
        })
        setProgressPercent(Math.trunc(currentProgress))
    }, [name, description, categoryId, colors, thumbnail, priceMin, priceMax])

    useEffect(() => {
        async function loadCategories() {
            const result = await getCategoriesForSelect();
            setCategoryIdOptions(result);
        }

        loadCategories();
    }, [])

    useEffect(() => {
        async function loadCar() {
            const car = (await getCarByID(id)).data;
            setName(car.name);
            setPriceMin(car.priceMin);
            setPriceMax(car.priceMax);
            setDescription(car.description);
            setCategoryId({
                label: car.categoryId.name,
                value: car.categoryId.id,
                description: car.categoryId.description
            });
            setColors(car.colors);
            setThumbnail(car.thumbnail);
        }

        if (id) {
            loadCar();
        } else {
            setName('');
            setPriceMin('');
            setPriceMax('');
            setDescription('');
            setCategoryId({
                label: '',
                value: null,
            });
            setColors([]);
            setThumbnail(null);
        }
    }, [id])

    async function deleteCard() {
        await deleteCar(id);
        history.push('/admin/car');
    }

    async function saveCard() {
        const summary = {
            name,
            priceMin,
            priceMax,
            description,
            colors,
            thumbnail,
            categoryId: {
                name: categoryId.label,
                id: categoryId.value,
                description: categoryId.description,
            },
        }
        if (id) {
            async function updateCurrentCar(id, car) {
                await updateCar(id, car);
                showSavedCarAlert();
            }

            updateCurrentCar(id, summary);
        } else {
            async function createCurrentCar(car) {
                const result = await createCar(car);
                showSavedCarAlert();
                history.push(`/admin/car/${result.data.id}`);
            }

            createCurrentCar(summary);
        }
    }

    function uploadFile(file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setThumbnail({
                mimetype: file.type,
                originalname: file.name,
                path: fileReader.result,
                size: file.size,
            });
        }
    }

    function showSavedCarAlert() {
        setAlertMessage('✓ Успех! Машина сохранена');
        setIsAlertShown(true);
    }

    return (
        <div className={carCardCn()}>
            <Alert
                message={alertMessage}
                isShown={isAlertShown}
                onClose={() => setIsAlertShown(false)}
            />
            <div className={carCardCn('title')}>Карточка автомобиля</div>
            <div className={carCardCn('content-wrapper')}>
                <div className={carCardCn('main-info')}>
                    <div className={carCardCn('image-wrapper')}>
                        <img
                            src={thumbnail ? getCarImage(thumbnail.path) : CatStubImage}
                            alt="car model"
                            className={carCardCn('car-image')}
                            crossOrigin="anonymous"
                            referrerPolicy="origin"
                        />
                        {name && <p className={carCardCn('name')}>{name}</p>}
                        {categoryId.value && <p className={carCardCn('categoryId-title')}>{categoryId.description}</p>}
                        <AdminCustomFileInput onChange={uploadFile}/>
                    </div>
                    <ProgressBar percent={progressPercent}/>
                    <div className={carCardCn('description')}>
                        <AdminCustomTextarea
                            label="Описание"
                            value={description}
                            onChange={setDescription}
                        />
                    </div>
                </div>
                <div className={carCardCn('form-wrapper')}>
                    <div className={carCardCn('sub-title')}>Настройки автомобиля</div>
                    <div className={carCardCn('form')}>
                        <div className={carCardCn('field')}>
                            <AdminCustomInput
                                label="Модель автомобиля"
                                onChange={setName}
                                value={name}
                                width="320px"
                            />
                        </div>
                        <div className={carCardCn('field')}>
                            <AdminCustomInput
                                label="Минимальная стоимость"
                                onChange={setPriceMin}
                                value={priceMin}
                                type="number"
                                width="320px"
                            />
                        </div>
                        <div className={carCardCn('field')}>
                            <AdminCustomInput
                                label="Максимальная стоимость"
                                onChange={setPriceMax}
                                value={priceMax}
                                type="number"
                                width="320px"
                            />
                        </div>
                        <div className={carCardCn('field')}>
                            <label className={carCardCn('label')}>Тип автомобиля</label>
                            <CustomSelect
                                styles={categoriesStyles}
                                placeholder="Тип автомобиля"
                                onChange={setCategoryId}
                                isDisabled={!categoryIdOptions}
                                options={categoryIdOptions}
                                value={categoryId}
                                isClearable="false"
                            />
                        </div>
                        <div className={carCardCn('field')}>
                            <AdminPicker
                                label="Доступные цвета"
                                values={colors}
                                width="283px"
                                onAdd={(color) => setColors([...colors, color])}
                                onRemove={(color) => setColors(colors.filter(currentColor => currentColor !== color))}
                            />
                        </div>
                    </div>
                    <div className={carCardCn('buttons')}>
                        <div className={carCardCn('save-and-cancel-buttons')}>
                            <AdminCustomButton
                                label='Сохранить'
                                disabled={progressPercent !== 100}
                                onClick={saveCard}/>
                            <div className={carCardCn('cancel-button')}>
                                <AdminCustomButton
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
                        <AdminCustomButton
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
        </div>
    );
}