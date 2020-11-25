import React from "react";
import './Breadcrumb.scss'
import {STEPS} from "../step-switcher/StepSwitcher";


export default function Breadcrumb(props) {
        return <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <button className={props.step === STEPS.LOCATION ? "breadcrumb-button_active breadcrumb-button" : "breadcrumb-button"}>Местоположение</button>
                </li>
                <li className="breadcrumb-item">
                    <button className={props.step === STEPS.MODEL ? "breadcrumb-button_active breadcrumb-button" : "breadcrumb-button"}>Модель</button>
                </li>
                <li className="breadcrumb-item">
                    <button className={props.step === STEPS.ADDITION ? "breadcrumb-button_active breadcrumb-button" : "breadcrumb-button"}>Дополнительно</button>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                    <button className={props.step === STEPS.SUMMARY ? "breadcrumb-button_active breadcrumb-button" : "breadcrumb-button"}>Итого</button>
                </li>
            </ol>
        </nav>;
}

