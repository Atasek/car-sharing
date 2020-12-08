import React, {useEffect, useState} from "react";
import {STEPS} from "../step-switcher/StepSwitcher";
import OrderInfoButton from "../components/order-info-button/OrderInfoButton";
import './OrderInfo.scss';
import {formatPriceNumber, getDurationOfLease, getPrice} from "../../../helpers";
export default function OrderInfo(props) {
    const [step, nextStep] = useState(STEPS.LOCATION);
    const ADDITIONAL_SERVICES = [{
        title: 'Полный бак',
        value: props.order.isFullTank,
    },{
        title: 'Детское кресло',
        value: props.order.isNeedChildChair,
    },{
        title: 'Правый руль',
        value: props.order.isRightWheel,
    },];

    function changeStep() {
        if (step === STEPS.LOCATION) {
            nextStep(STEPS.MODEL);
            props.nextStep(STEPS.MODEL);
            return;
        }
        if (step === STEPS.MODEL) {
            nextStep(STEPS.ADDITION);
            props.nextStep(STEPS.ADDITION);
            return;
        }
        if (step === STEPS.ADDITION) {
            nextStep(STEPS.SUMMARY);
            props.nextStep(STEPS.SUMMARY);
            return;
        }
        if (step === STEPS.SUMMARY) {
        }
    }

    function isButtonDisabled() {
        return (step === STEPS.LOCATION && (!props.order.city || !props.order.distributionPoint)) ||
            (step === STEPS.MODEL && !props.order.car) ||
            (step === STEPS.ADDITION && (!props.order.color || !props.order.dateFrom || !props.order.dateTo || !props.order.rate))
    }

    return <div className='order-info'>
        <span className='order-info__main-title'>Ваш заказ:</span>
        {props.order.city && props.order.distributionPoint && <div className='order-info__row'>
            <span className='order-info__title'>Пункт выдачи</span>
            <div className='order-info__line'/>
            <span className='order-info__value'>{props.order.city.label}, {props.order.distributionPoint.address}</span>
        </div>}
        {props.order.car && <div className='order-info__row'>
            <span className='order-info__title'>Модель</span>
            <div className='order-info__line'/>
            <span className='order-info__value'>{props.order.car.name}</span>
        </div>}
        {props.order.color && <div className='order-info__row'>
            <div className='order-info__title'>Цвет</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>{props.order.color}</div>
        </div>}
        {props.order.dateFrom && props.order.dateTo && <div className='order-info__row'>
            <div className='order-info__title'>Длительность аренды</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>{getDurationOfLease(props.order.dateTo, props.order.dateFrom)} д</div>
        </div>}
        {props.order.rate && <div className='order-info__row'>
            <div className='order-info__title'>Тариф</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>{props.order.rate.rateTypeId.name}</div>
        </div>}
        {ADDITIONAL_SERVICES.filter(addition => addition.value).map(addition => <div className="order-info__row" key={addition.title}>
            <div className='order-info__title'>{addition.title}</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>Да</div>
        </div>)}
        <div className="order-info__price"><span className="order-info__price-title">Цена: </span><span>{getPrice(props.order, props.isOrderConfirmed ? STEPS.SUMMARY : step)} ₽</span></div>
        <OrderInfoButton
            step={step}
            isOrderConfirmed={props.isOrderConfirmed}
            nextStep={() => changeStep()}
            confirmOrder={props.confirmOrder}
            disabled={isButtonDisabled()}
        />
    </div>
}
