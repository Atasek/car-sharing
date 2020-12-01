import React from "react";
import "./Location.scss"
import {STEPS} from "../step-switcher/StepSwitcher";

export default function OrderInfo(props) {
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
        <button className='description__button' onClick={() => props.step === STEPS.SUMMARY ? props.confirmOrder() : props.changeStep()}>
            {(props.step === STEPS.LOCATION && 'Выбрать модель') ||
            (props.step === STEPS.MODEL && 'Дополнительно') ||
            (props.step === STEPS.ADDITION && 'Итого') ||
            (props.step === STEPS.SUMMARY && 'Заказать')
            }
        </button>
    </div>
}