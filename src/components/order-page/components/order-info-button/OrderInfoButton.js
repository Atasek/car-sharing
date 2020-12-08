import {STEPS} from "../../step-switcher/StepSwitcher";
import React from "react";
import "./OrderInfoButton.scss";

export default function OrderInfoButton(props) {

    function getTitle(props) {
        return (props.isOrderConfirmed && 'Отменить') ||
            (props.step === STEPS.LOCATION && 'Выбрать модель') ||
            (props.step === STEPS.MODEL && 'Дополнительно') ||
            (props.step === STEPS.ADDITION && 'Итого') ||
            (props.step === STEPS.SUMMARY && 'Заказать') ||
            (props.isOrderConfirmed && 'Отменить');
    }

    function getClass(props) {
        return props.isOrderConfirmed ? "order-info-button order-info-button_cancel" :
            props.disabled ? 'order-info-button order-info-button_disabled' :
                'order-info-button';
    }

    function getOnClickAction(props) {
        return props.isOrderConfirmed ? props.cancelOrder() :
            props.step === STEPS.SUMMARY ? props.confirmOrder() :
                props.nextStep();
    }

    return <button
        disabled={props.disabled}
        className={getClass(props)}
        onClick={() => getOnClickAction(props)}>
        {getTitle(props)}
    </button>
}
