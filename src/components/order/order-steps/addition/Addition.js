import React, {useEffect, useState} from "react";
import "./Addition.scss";
import RadioInput from "../../../common/form-parts/radio/Radio";
import {getRate} from "../../../../api/order";
import CustomDatepicker from "../../../common/form-parts/date-picker/Datepicker";
import CustomCheckbox from "../../../common/form-parts/checkbox/Checkbox";

export default function Addition(props) {
    const [color, setColor] = useState('Любой');
    const [rate, setRate] = useState(null);
    const [rates, setRates] = useState([]);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [isFullTank, setFullTank] = useState(false);
    const [isNeedChildChair, setChildChair] = useState(false);
    const [isRightWheel, setRightWheel] = useState(false);
    const ADDITIONAL_SERVICES = [{
        value: () => isFullTank,
        label: "Полный бак, 500₽",
        onChange: (event) => {
            setFullTank(event.target.checked);
            props.changeOrder({color, rate, startDate: dateFrom, endDate: dateTo, isNeedChildChair, isRightWheel, isFullTank: event.target.checked});
        },
        checked: () => isFullTank,
    },{
        value: () => isNeedChildChair,
        label: "Детское кресло, 200₽",
        onChange: (event) => {
            setChildChair(event.target.checked);
            props.changeOrder({color, rate, startDate: dateFrom, endDate: dateTo, isFullTank, isRightWheel, isNeedChildChair: event.target.checked});
        },
        checked: () => isNeedChildChair,
    },{
        value: () => isRightWheel,
        label: "Правый руль, 1600₽",
        onChange: (event) => {
            setRightWheel(event.target.checked);
            props.changeOrder({color, rate, startDate: dateFrom, endDate: dateTo, isFullTank, isNeedChildChair, isRightWheel: event.target.checked});
        },
        checked: () => isRightWheel,
    } ];

    async function fetchRate() {
        const response = await getRate();
        setRates(response.data);
    }

    useEffect(() => {
        fetchRate();
    }, []);

        return (
            <div className='addition'>
                <div className='addition__item'>
                    <div className='addition__title-wrapper'><span className="addition__title">Цвет</span></div>
                    <div className="addition__row">
                        {['Любой', ...props.carColors].map((carColor) =>
                            <RadioInput
                                key={carColor}
                                checked={color === carColor}
                                value={carColor}
                                onChange={() => {
                                    setColor(carColor);
                                    props.changeOrder({color: carColor, rate, startDate: dateFrom, endDate: dateTo, isFullTank, isRightWheel, isNeedChildChair});
                                }}
                            />)}
                    </div>
                </div>
                <div className='addition__item'>
                    <div className='addition__title-wrapper'><span className="addition__title">Дата аренды</span></div>
                    <div className="addition__row addition__row_date">
                        <span className="addition__date-title addition__date-title_start-date">C</span>
                        <CustomDatepicker
                        placeholderText="Выберите дату и время"
                        selected={dateFrom}
                        startDate={dateFrom}
                        endDate={dateTo}
                        maxDate={dateTo}
                        onChange={date => {
                            setDateFrom(date);
                            props.changeOrder({color, rate, dateFrom: date, dateTo, isFullTank, isRightWheel, isNeedChildChair });
                        }}
                        selectsStart
                    />
                    </div>
                    <div className="addition__row">
                        <span className="addition__date-title">По</span>
                        <CustomDatepicker
                            disabled={!dateFrom}
                            placeholderText="Выберите дату и время"
                            selected={dateTo}
                            onChange={date => {
                                setDateTo(date);
                                props.changeOrder({color, rate, dateFrom, dateTo: date, isFullTank, isRightWheel, isNeedChildChair });
                            }}
                            startDate={dateFrom}
                            minDate={dateFrom}
                            endDate={dateTo}
                            selectsEnd
                    />
                    </div>
                </div>
                <div className='addition__item'>
                    <div className='addition__title-wrapper'><span className="addition__title">Тариф</span></div>
                    {rates.map(currentRate => <div className="addition__row" key={currentRate.id}>
                        <RadioInput
                            checked={rate && rate.id === currentRate.id}
                            value={`${currentRate.price} ₽/`}
                            onChange={() => {
                                setRate(currentRate);
                                props.changeOrder({color, rate: currentRate, startDate: dateFrom, endDate: dateTo, isFullTank, isRightWheel, isNeedChildChair });
                            }}
                        />
                    </div>)}
                </div>
                <div className="addition__item">
                    <div className='addition__title-wrapper'><span className="addition__title">Доп услуги</span></div>
                    {ADDITIONAL_SERVICES.map(additionalService => <div className="addition__row" key={additionalService.label}>
                        <CustomCheckbox
                            value={additionalService.value()}
                            onChange={additionalService.onChange}
                            label={additionalService.label}
                            checked={additionalService.checked()}
                        />
                    </div>)}
                </div>
            </div>
        )
    }
