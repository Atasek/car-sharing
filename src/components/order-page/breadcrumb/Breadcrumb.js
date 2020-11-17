import React, {Component} from "react";
import './Breadcrumb.scss'
import {STEPS} from "../step-switcher/StepSwitcher";


export default function Breadcrumb(props) {
        return <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <button className="breadcrumb-button" onClick={() => props.changeStep(STEPS.LOCATION)}>Местоположение</button>
                </li>
                <li className="breadcrumb-item">
                    <button className="breadcrumb-button" onClick={() => props.changeStep(STEPS.MODEL)}>Модель</button>
                </li>
                <li className="breadcrumb-item">
                    <button className="breadcrumb-button" onClick={() => props.changeStep(STEPS.ADDITION)}>Дополнительно</button>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                    <button className="breadcrumb-button" onClick={() => props.changeStep(STEPS.SUMMARY)}>Итого</button>
                </li>
            </ol>
        </nav>;
}

