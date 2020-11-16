import React from "react";
import './Breadcrumb.scss'
import {STEPS} from "../step-switcher/StepSwitcher";


export default function Breadcrumb(props) {
    function changeStep(step) {
        props.changeStep(step);
    }
    return <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <button onClick={() => changeStep(STEPS.MODEL)}>Местоположение</button>
            </li>
            <li className="breadcrumb-item">
                <button onClick={() => changeStep(STEPS.MODEL)}>Модель</button>
            </li>
            <li className="breadcrumb-item">
                <button onClick={() => changeStep(STEPS.ADDITION)}>Дополнительно</button>
            </li>
            <li className="breadcrumb-item" aria-current="page">
                <button onClick={() => changeStep(STEPS.SUMMARY)}>Итого</button>
            </li>
        </ol>
    </nav>
    }

