import {cn} from "../../../../helpers";
import React, {useEffect, useReducer, useState} from "react";
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
            '@media(max-width: 768px)': {
                width: "100%",
            }
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

const CAR_ACTION_TYPES = {
    RESET: 'reset',
    ADD_COLOR: 'addColor',
    REMOVE_COLOR: 'removeColor',
    FULL_CAR: 'fullCar',
    NAME: 'name',
    PRICE_MIN: 'priceMin',
    PRICE_MAX: 'priceMax',
    DESCRIPTION: 'description',
    CATEGORY_ID: 'categoryId',
    THUMBNAIL: 'thumbnail',
}

function reduceCar(state, action) {
    switch (action.type) {
        case CAR_ACTION_TYPES.NAME:
            return {...state, [CAR_ACTION_TYPES.NAME]: action.payload};
        case CAR_ACTION_TYPES.PRICE_MIN:
            return {...state, [CAR_ACTION_TYPES.PRICE_MIN]: action.payload};
        case CAR_ACTION_TYPES.PRICE_MAX:
            return {...state, [CAR_ACTION_TYPES.PRICE_MAX]: action.payload};
        case CAR_ACTION_TYPES.ADD_COLOR:
            return {...state, colors: [...state.colors, action.payload]};
        case CAR_ACTION_TYPES.REMOVE_COLOR:
            return {...state, colors: state.colors.filter(currentColor => currentColor !== action.payload)};
        case CAR_ACTION_TYPES.DESCRIPTION:
            return {...state, [CAR_ACTION_TYPES.DESCRIPTION]: action.payload};
        case CAR_ACTION_TYPES.THUMBNAIL:
            return {...state, [CAR_ACTION_TYPES.THUMBNAIL]: action.payload};
        case CAR_ACTION_TYPES.CATEGORY_ID:
            return {...state, [CAR_ACTION_TYPES.CATEGORY_ID]: action.payload};
        case CAR_ACTION_TYPES.FULL_CAR:
            return action.payload;
        case CAR_ACTION_TYPES.RESET:
            return initialCar;
        default:
            return new Error('Неизвестный action type');
    }
}

const initialCar = {
    name: '',
    priceMin: '',
    priceMax: '',
    description: '',
    categoryId: {
        label: '',
        description: '',
        value: null,
    },
    colors: [],
    thumbnail: null,
}

export function CarCard() {
    const carCardCn = cn('car-card');
    const history = useHistory();
    const {id} = useParams();

    const [car, dispatchCar] = useReducer(reduceCar, initialCar);
    const [progressPercent, setProgressPercent] = useState(0);
    const [categoryIdOptions, setCategoryIdOptions] = useState(null);
    const [isAlertShown, setIsAlertShown] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {
        function calculateProgress() {
            const fields = [
                !!car.name,
                !!car.description,
                !!car.priceMin,
                !!car.priceMax,
                !!car.thumbnail,
                !!car.categoryId.value,
                car.colors.length > 0,
            ]
            const fulledInFieldsCount = fields.filter(field => field).length;
            if (fulledInFieldsCount === 0) {
                setProgressPercent(0);
            } else {
                setProgressPercent(Math.trunc( (fulledInFieldsCount / fields.length ) * 100));
            }
        }

        calculateProgress();
    }, [car])

    useEffect(() => {
        let mounted = true;
        async function loadCategories() {
            const result = await getCategoriesForSelect();
            if (mounted) {
                setCategoryIdOptions(result);
            }
        }

        loadCategories();
        return () => mounted = false;
    }, [])

    useEffect(() => {
        async function loadCar() {
            const {name, priceMin, priceMax, description, colors, thumbnail, categoryId} = (await getCarByID(id)).data;
            dispatchCar({type: CAR_ACTION_TYPES.FULL_CAR, payload: {
                name,
                priceMin,
                priceMax,
                description,
                colors,
                thumbnail,
                categoryId: {
                    label: categoryId.name,
                    value: categoryId.id,
                    description: categoryId.description
                },
            }});
        }

        if (id) {
            loadCar();
        }
    }, [id])

    async function deleteCard() {
        await deleteCar(id);
        dispatchCar({type: CAR_ACTION_TYPES.RESET})
        history.push('/admin/car');
    }

    async function saveCard() {
        const summary = {
            ...car,
            categoryId: {
                name: car.categoryId.label,
                id: car.categoryId.value,
                description: car.categoryId.description,
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
            dispatchCar({type: CAR_ACTION_TYPES.THUMBNAIL, payload: {
                    mimetype: file.type,
                    originalname: file.name,
                    path: fileReader.result,
                    size: file.size,
                }});
        }
    }

    function showSavedCarAlert() {
        setAlertMessage('✓ Успех! Машина сохранена');
        setIsAlertShown(true);
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    function isMobile() {
        return width <= 768;
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
                            src={car.thumbnail ? getCarImage(car.thumbnail.path) : CatStubImage}
                            alt="car model"
                            className={carCardCn('car-image')}
                            crossOrigin="anonymous"
                            referrerPolicy="origin"
                        />
                        {car.name && <p className={carCardCn('name')}>{car.name}</p>}
                        {car.categoryId.value && <p className={carCardCn('categoryId-title')}>{car.categoryId.description}</p>}
                        <AdminCustomFileInput onChange={uploadFile}/>
                    </div>
                    <ProgressBar percent={progressPercent}/>
                    <div className={carCardCn('description')}>
                        <AdminCustomTextarea
                            label="Описание"
                            value={car.description}
                            onChange={description => dispatchCar({type: CAR_ACTION_TYPES.DESCRIPTION, payload: description})}
                        />
                    </div>
                </div>
                <div className={carCardCn('form-wrapper')}>
                    <div>
                        <div className={carCardCn('sub-title')}>Настройки автомобиля</div>
                        <div className={carCardCn('form')}>
                            <div className={carCardCn('field')}>
                                <AdminCustomInput
                                    label="Модель автомобиля"
                                    onChange={name => dispatchCar({type: CAR_ACTION_TYPES.NAME, payload: name})}
                                    value={car.name}
                                    width={isMobile() ? '100%' : "320px"}
                                />
                            </div>
                            <div className={carCardCn('field')}>
                                <AdminCustomInput
                                    label="Минимальная стоимость"
                                    onChange={priceMin => dispatchCar({type: CAR_ACTION_TYPES.PRICE_MIN, payload: priceMin})}
                                    value={car.priceMin}
                                    type="number"
                                    width={isMobile() ? '100%' : "320px"}
                                />
                            </div>
                            <div className={carCardCn('field')}>
                                <AdminCustomInput
                                    label="Максимальная стоимость"
                                    onChange={priceMax => dispatchCar({type: CAR_ACTION_TYPES.PRICE_MAX, payload: priceMax})}
                                    value={car.priceMax}
                                    type="number"
                                    width={isMobile() ? '100%' : "320px"}
                                />
                            </div>
                            <div className={carCardCn('field')}>
                                <label className={carCardCn('label')}>Тип автомобиля</label>
                                <CustomSelect
                                    styles={categoriesStyles}
                                    placeholder="Тип автомобиля"
                                    onChange={categoryId => dispatchCar({type: CAR_ACTION_TYPES.CATEGORY_ID, payload: categoryId})}
                                    value={car.categoryId}
                                    isDisabled={!categoryIdOptions}
                                    options={categoryIdOptions}
                                    isClearable="false"
                                />
                            </div>
                            <div className={carCardCn('field', {"responsive-height": true})}>
                                <AdminPicker
                                    label="Доступные цвета"
                                    values={car.colors}
                                    width="283px"
                                    onAdd={(color) => dispatchCar({type: CAR_ACTION_TYPES.ADD_COLOR, payload: color})}
                                    onRemove={(color) => dispatchCar({type: CAR_ACTION_TYPES.REMOVE_COLOR, payload: color})}
                                />
                            </div>
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