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
import {filterStyles} from "../order-filters/OrderFilters";
import {getCategoriesForSelect} from "../../../../api/order";
import {AdminPicker} from "../../components/admin-picker/AdminPicker";

/*function carReducer(state, action) {
    switch (action.type) {
        case 'name':
            return {...state, name: action.payload};
        case 'description':
            return {...state, description: action.payload};
        case 'categoryId':
            return {...state, categoryId: action.payload};
        case 'colors':
            return {...state, colors: action.payload};
        case 'thumbnail':
            return {...state, thumbnail: action.payload};
        case 'tank':
            return {...state, tank: action.payload};
        default:
            throw new Error('Неизвестный тип поля');

    }
}

const initialCarState = {
    name: '',
    description: '',
    categoryId: {
        label: 'Выберете тип автомобиля',
        value: null,
    },
    colors: [],
    thumbnail: null,
}*/

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
    const { id } = useParams();
    const [car, setCar] = useState(null);
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

    useEffect(() => {
        let currentProgress = 0;
        const countOfFields = 5;
        setProgressPercent(Math.trunc(currentProgress))
    }, [name, description, categoryId, colors, thumbnail, priceMin, priceMax])

    useEffect(() => {
        async function loadCategories() {
            const result = await getCategoriesForSelect();
            setCategoryIdOptions(result);
        }
        loadCategories();
    }, [])

    async function deleteCard() {}
    async function saveCard() {}
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

    return (
      <div className={carCardCn()}>
          <div className={carCardCn('title')}>Карточка автомобиля</div>
          <div className={carCardCn('content-wrapper')}>
              <div className={carCardCn('main-info')}>
                  <div className={carCardCn('image-wrapper')}>
                      <img
                          src={id ? getCarImage(car.carId.thumbnail.path) : CatStubImage}
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
                          <AdminCustomButton label='Сохранить' onClick={saveCard}/>
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
                          }}
                      />
                  </div>
              </div>
          </div>
      </div>
    );
}