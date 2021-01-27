import {STEPS} from "../../step-switcher/StepSwitcher";
import React from "react";
import "./OrderInfoButton.scss";

export default function OrderInfoButton(props) {

    function getTitle(props) {
        if (props.isOrderConfirmed) {
            return 'Отменить';
        } else {
            let title;
            switch (props.step) {
                case STEPS.LOCATION:
                    title = 'Выбрать модель';
                    break;
                case STEPS.MODEL:
                    title = 'Дополнительно';
                    break;
                case STEPS.ADDITION:
                    title = 'Итого';
                    break;
                case STEPS.SUMMARY:
                    title = 'Заказать';
                    break;
                default:
                    break;
            }
            return title;
        }
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
