import {Button} from "../../../common/button/Button";
import {useEffect, useReducer, useState} from "react";
import "./ModelFilters.scss";
import CustomSelect from "../../../common/form-parts/select/Select";
import {getCars} from "../../../../api/order";
import {cn, filterRepeatedOptions} from "../../../../helpers";

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
        case 'categoryId':
            return {...state, categoryId: action.payload};
        default:
            throw new Error('Неизвестный фильтр');
    }
}

const initialFiltersState = {categoryId: null};

export function ModelFilters({applyFilters}) {
    const modelFiltersCn = cn('model-filters')

    const [filters, setFilter] = useReducer(filterReducer, initialFiltersState);
    const [categoryIds, setCategoryIds] = useState(null);

    async function loadOptions() {
        const categoryIdOptions = filterRepeatedOptions((await getCars()).data
            .map((car) => ({ label: car.categoryId.name, value: car.categoryId.id })));
        categoryIdOptions.unshift({label: 'Все типы', value: null});
        setCategoryIds(categoryIdOptions);
    }

    useEffect(() => {
        loadOptions();
    }, []);

    return <div className={modelFiltersCn()}>
        <div className={modelFiltersCn('filters')}>
            <CustomSelect
                styles={filterStyles}
                placeholder="Все типы"
                onChange={(carId) => {
                    setFilter({type: 'categoryId', payload: carId})
                }}
                isDisabled={!categoryIds}
                options={categoryIds}
                value={filters.categoryId}
                isClearable="false"
            />
        </div>
        <div>
            <Button label="Применить" onClick={() => {
                let preparedFilters = {};
                Object.keys(filters).forEach((filterKey) => preparedFilters[filterKey] = filters[filterKey] && filters[filterKey]["value"]);
                return applyFilters(preparedFilters);
            }}/>
        </div>
    </div>
}
