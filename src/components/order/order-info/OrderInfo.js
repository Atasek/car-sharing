import React, {useState} from "react";
import {STEPS} from "../step-switcher/StepSwitcher";
import OrderInfoButton from "../components/order-info-button/OrderInfoButton";
import './OrderInfo.scss';
import {getDurationOfLease, getPrice} from "../../../helpers";
import {OrderInfoRow} from "./order-info-row/OrderInfoRow";
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
        switch (step) {
            case STEPS.LOCATION:
                nextStep(STEPS.MODEL);
                props.nextStep(STEPS.MODEL);
                break;
            case STEPS.MODEL:
                nextStep(STEPS.ADDITION);
                props.nextStep(STEPS.ADDITION);
                break;
            case STEPS.ADDITION:
                nextStep(STEPS.SUMMARY);
                props.nextStep(STEPS.SUMMARY);
                break;
            default:
                break;
        }
    }

    function isButtonDisabled() {
        let isDisabled;
        switch (step) {
            case STEPS.LOCATION:
                isDisabled = !props.order.city || !props.order.distributionPoint;
                break;
            case STEPS.MODEL:
                isDisabled = !props.order.car;
                break;
            case STEPS.ADDITION:
                isDisabled = !props.order.color || !props.order.dateFrom || !props.order.dateTo || !props.order.rate;
                break;
            default:
                isDisabled = false;
                break;
        }
        return isDisabled;
    }

    return <div className='order-info'>
        <span className='order-info__main-title'>Ваш заказ:</span>
        {props.order.city && props.order.distributionPoint && <OrderInfoRow title="Пункт выдачи" value={`${props.order.city.label}, ${props.order.distributionPoint.address}`}/>}
        {props.order.car && <OrderInfoRow title="Модель" value={props.order.car.name}/>}
        {props.order.color && <OrderInfoRow title="Цвет" value={props.order.color}/>}
        {props.order.dateFrom && props.order.dateTo && <OrderInfoRow title="Длительность аренды" value={`${getDurationOfLease(props.order.dateTo, props.order.dateFrom)} д`}/>}
        {props.order.rate && <OrderInfoRow title="Тариф" value={props.order.rate.rateTypeId.name}/>}
        {ADDITIONAL_SERVICES.filter(addition => addition.value).map(addition => <OrderInfoRow key={addition.title} title={addition.title} value="Да"/>)}
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
