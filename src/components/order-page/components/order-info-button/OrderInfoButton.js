import {STEPS} from "../../step-switcher/StepSwitcher";
import React from "react";
import "./OrderInfoButton.scss";

export default function OrderInfoButton(props) {
    return <button disabled={props.disabled} className={props.disabled ? 'order-info-button order-info-button_disabled' : 'order-info-button'} onClick={() => props.nextStep()}>
        {(props.isOrderConfirmed && 'Отменить') ||
        (props.step === STEPS.LOCATION && 'Выбрать модель') ||
        (props.step === STEPS.MODEL && 'Дополнительно') ||
        (props.step === STEPS.ADDITION && 'Итого') ||
        (props.step === STEPS.SUMMARY && 'Заказать')
        }
    </button>
}
