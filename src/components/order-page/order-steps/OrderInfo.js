import React, {useState} from "react";
import "./Location.scss"
import {STEPS} from "../step-switcher/StepSwitcher";
import OrderInfoButton from "../components/order-info-button/OrderInfoButton";

export default function OrderInfo(props) {
    const [step, nextStep] = useState(STEPS.LOCATION);

    function changeStep() {
        // TODO: props.nextStep(step) or props.confirmOrder()
    }
    return <div className='description'>
        <div className='description__Your-order'>Ваш заказ:</div>
        <div className='description__item'>
            <div className='description__item-point'>Пункт выдачи</div>
            <div className='description__item-line'></div>
            <div className='description__item-status'></div>
        </div>
        <div className='description__item'>
            <div className='description__item-point'>Модель</div>
            <div className='description__item-line'></div>
            <div className='description__item-status'></div>
        </div>
        <div className='description__item'>
            <div className='description__item-point'>Цвет</div>
            <div className='description__item-line'></div>
            <div className='description__item-status'></div>
        </div>
        <div className='description__item'>
            <div className='description__item-point'>Длительность аренды</div>
            <div className='description__item-line'></div>
            <div className='description__item-status'></div>
        </div>
        <div className='description__item'>
            <div className='description__item-point'>Тариф</div>
            <div className='description__item-line'></div>
            <div className='description__item-status'></div>
        </div>
        <div className='description__item'>
            <div className='description__item-point'>Полный бак</div>
            <div className='description__item-line'></div>
            <div className='description__item-status'></div>
        </div>
        <div className='description__item'>
            <div className='description__item-point'>Цена</div>
            <div className='description__item-line'></div>
            <div className='description__item-status'></div>
        </div>
        <OrderInfoButton
            step={step}
            nextStep={() => changeStep()}
        />
    </div>
}
