import React, {useState} from "react";
import "../order-steps/Location.scss"
import {STEPS} from "../step-switcher/StepSwitcher";
import OrderInfoButton from "../components/order-info-button/OrderInfoButton";
import './OrderInfo.scss';

export default function OrderInfo(props) {
    const [step, nextStep] = useState(STEPS.LOCATION);
    const [isOrderConfirmed, setOrderConfirmed] = useState(false);

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
            // TODO
            return;
        }
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
        {/*  <div className='order-info__row'>
            <div className='order-info__title'>Цвет</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>Голубой</div>
        </div>
        <div className='order-info__row'>
            <div className='order-info__title'>Длительность аренды</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>1д&nbsp;2ч</div>
        </div>
        <div className='order-info__row'>
            <div className='order-info__title'>Тариф</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>На сутки</div>
        </div>
        <div className='order-info__row'>
            <div className='order-info__title'>Полный бак</div>
            <div className='order-info__line'></div>
            <div className='order-info__value'>Да</div>
        </div>
        <div className="order-info__price"><span className="order-info__price-title">Цена: </span><span>от {322} до {322} ₽</span></div>*/}
        <OrderInfoButton
            step={step}
            isOrderConfirmed={isOrderConfirmed}
            nextStep={() => changeStep()}
            disabled={(step === STEPS.LOCATION && !props.order.city || !props.order.distributionPoint) || (step === STEPS.MODEL && !props.order.car)}
        />
    </div>
}
