import {STEPS} from "../../step-switcher/StepSwitcher";
import React from "react";

export default function OrderInfoButton(props) {
    return <button className='description__button' onClick={() => props.nextStep()}>
        {(props.step === STEPS.LOCATION && 'Выбрать модель') ||
        (props.step === STEPS.MODEL && 'Дополнительно') ||
        (props.step === STEPS.ADDITION && 'Итого') ||
        (props.step === STEPS.SUMMARY && 'Заказать')
        }
    </button>
}
