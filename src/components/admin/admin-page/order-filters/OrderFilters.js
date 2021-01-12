import {AdminCustomButton} from "../../components/AdminCustomButton";
import {useEffect, useReducer, useState} from "react";
import "./OrderFilters.scss";
import CustomSelect from "../../../common/select/Select";
import {getCars, getCities, getOrderStatus} from "../../../../api/order";

export const filterStyles = {
    container: (styles) => (
        {
            ...styles,
            width: "110px",
            margin: "0 15px 0 0",
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
            boxShadow: "none !important",
            ":hover": {
                borderColor: `#007BFF`
            },
            ":focus": {
                borderColor: `#007BFF`
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

function filterReducer(state, action) {
    switch (action.type) {
        case 'createdAt':
            return {...state, createdAt: action.payload};
        case 'carId':
            return {...state, carId: action.payload};
        case 'cityId':
            return {...state, cityId: action.payload};
        case 'orderStatusId':
            return {...state, orderStatusId: action.payload};
        default:
            throw new Error('Неизвестный фильтр');
    }
}

const initialFiltersState = {createdAt: null, carId: null, cityId: null, orderStatusId: null};

export function OrderFilters({applyFilters}) {
    const [filters, setFilter] = useReducer(filterReducer, initialFiltersState);
    const [cars, setCars] = useState(null);
    const [cities, setCities] = useState(null);
    const [statuses, setStatuses] = useState(null);

    function getCreatedAtOptions() {
        const currentDate = new Date();
        return [
            {label: "За все время", value: null},
            {label: "За год", value: currentDate.setFullYear(currentDate.getFullYear() - 1)},
            {label: "За месяц", value: currentDate.setMonth(currentDate.getMonth() - 1)},
            {label: "За неделю", value: currentDate.setDate(currentDate.getDate() - 7)},
            {label: "За день", value: currentDate.setDate(currentDate.getDate() - 1)}
        ]
    }

    async function loadOptions() {
        const optionsListByType = (await Promise.all([getCars(), getCities(), getOrderStatus()])).map(optionsByType => optionsByType.data.map(options => (
            ({label: options.name, value: options.id})
            ))
        );
        optionsListByType[0].unshift({label: 'Все модели', value: null});
        optionsListByType[1].unshift({label: 'Все города', value: null});
        optionsListByType[2].unshift({label: 'Все статусы', value: null});
        setCars(optionsListByType[0]);
        setCities(optionsListByType[1]);
        setStatuses(optionsListByType[2]);
    }


    useEffect(() => {
        loadOptions();
    }, []);

    return <div className="order-filters">
        <div className="order-filters__filters">
            <CustomSelect
                styles={filterStyles}
                placeholder="За всё время"
                onChange={(createdAt) => {
                    setFilter({type: 'createdAt', payload: createdAt})
                }}
                options={getCreatedAtOptions()}
                value={filters.createdAt}
                isClearable="false"
            />
            <CustomSelect
                styles={filterStyles}
                placeholder="Все модели"
                onChange={(carId) => {
                    setFilter({type: 'carId', payload: carId})
                }}
                isDisabled={!cars}
                options={cars}
                value={filters.carId}
                isClearable="false"
            />
            <CustomSelect
                styles={filterStyles}
                placeholder="Все города"
                onChange={(cityId) => {
                    setFilter({type: 'cityId', payload: cityId})
                }}
                isDisabled={!cities}
                options={cities}
                value={filters.cityId}
                isClearable="false"
            />
            <CustomSelect
                styles={filterStyles}
                placeholder="Все статусы"
                onChange={(orderStatusId) => {
                    setFilter({type: 'orderStatusId', payload: orderStatusId})
                }}
                isDisabled={!statuses}
                options={statuses}
                value={filters.orderStatusId}
                isClearable="false"
            />
        </div>
        <div>
            <AdminCustomButton label="Применить" onClick={() => {
                let preparedFilters = {};
                Object.keys(filters).forEach((filterKey) => preparedFilters[filterKey] = filters[filterKey] && filters[filterKey]["value"]);
                return applyFilters(preparedFilters);
            }}/>
        </div>
    </div>
}
