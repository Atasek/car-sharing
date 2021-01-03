import React, {useState} from "react";


const periodOptions = [
    { label: "За все время", value: "" },
    { label: "За год", value: "year" },
    { label: "За месяц", value: "month" },
    { label: "За неделю", value: "week" },
    { label: "За день", value: "day" }
];

    export function AdminOrder() {
        const [city, setCity] = useState(null);
        const [periodFilter, setPeriodFilter] = useState(null);
        const [modelFilter, setModelFilter] = useState(null);
        const [cityFilter, setCityFilter] = useState(null);
        const [statusFilter, setStatusFilter] = useState(null);

        return <div className="admin__orders">
            <div className="orders__title">Заказы</div>
            <div className="orders">
                <div className="orders__header">
                    {/*<CustomSelect
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
                    />*/}
                </div>


            </div>
        </div>
}
