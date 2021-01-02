import React, {useEffect, useState} from "react";
import {AdminCustomSelect} from "../../components/AdminCustomSelect";
import CustomSelect from "../../../common/select/Select";


const periodOptions = [
    { label: "За все время", value: "" },
    { label: "За год", value: "year" },
    { label: "За месяц", value: "month" },
    { label: "За неделю", value: "week" },
    { label: "За день", value: "day" }
]
/*const [city, setCity] = useState(null);
const [periodFilter, setPeriodFilter] = useState(null);
const [modelFilter, setModelFilter] = useState(null);
const [cityFilter, setCityFilter] = useState(null);
const [statusFilter, setStatusFilter] = useState(null)

function changePeriod(period) {
    props.changePeriod({period, PeriodFilter})
    if (period) {
        const filteredPeriodOptions = originPeriodOptions.filter((periodOptions) =>
            periodOptions.label === city.value
        );
        setPeriodFilter(filteredPeriodOptions);
    } else {
        setPeriodFilter(originPeriodOptions);
    }
}*/

    export function AdminOrder() {
        return <div className="admin__orders">
            <div className="orders__title">Заказы</div>
            <div className="orders">
                <div className="orders__header">
                    <CustomSelect
                        options={periodOptions}
                        placeholder='За неделю'
                    />
                    <CustomSelect
                        onChange={(city) => changeCity(city)}
                        isDisabled={!cities && !distributionPoints}
                        options={cities}
                        value={city}
                        placeholder='Elantra'
                    />
                    <CustomSelect
                        options={periodOptions}
                        placeholder='Ульяновск'
                    />
                    <CustomSelect
                        options={periodOptions}
                        placeholder='В процессе'
                    />
                </div>


            </div>
        </div>
    }
}