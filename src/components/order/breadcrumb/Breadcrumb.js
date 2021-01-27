import React from "react";
import './Breadcrumb.scss'
import {STEPS} from "../step-switcher/StepSwitcher";
import {ReactComponent as BreadcrumbSeparator} from "../../../img/breadcrumb-separator.svg";


export default function OrderStatus(props) {
    return <div className="order-status">{props.orderNumber ? <OrderNumber number={props.orderNumber}/> : <Breadcrumbs step={props.step}/>}</div>
}

function OrderNumber(props) {
    return <span className="order-number">Заказ номер {props.number}</span>
}

function Breadcrumbs(props) {
    return <div className="breadcrumbs">
        <span
            className={props.step === STEPS.LOCATION ? "breadcrumbs__item_active breadcrumbs__item" :
                "breadcrumbs__item_passed breadcrumbs__item"}>
            Местоположение
        </span>
        <BreadcrumbSeparator className="breadcrumbs__separator"/>
        <span
            className={props.step === STEPS.MODEL ? "breadcrumbs__item_active breadcrumbs__item" :
                props.step === STEPS.LOCATION ? "breadcrumbs__item_following breadcrumbs__item" :
                    "breadcrumbs__item_passed breadcrumbs__item"}>
            Модель
        </span>
        <BreadcrumbSeparator className="breadcrumbs__separator"/>
        <span
            className={props.step === STEPS.ADDITION ? "breadcrumbs__item_active breadcrumbs__item" :
                props.step === STEPS.LOCATION || props.step === STEPS.MODEL ? "breadcrumbs__item_following breadcrumbs__item" :
                    "breadcrumbs__item_passed breadcrumbs__item"}>
            Дополнительно
        </span>
        <BreadcrumbSeparator className="breadcrumbs__separator"/>
        <span
            className={props.step === STEPS.SUMMARY ? "breadcrumbs__item_active breadcrumbs__item" :
                "breadcrumbs__item_following breadcrumbs__item"}>
            Итого
        </span>
    </div>;
}
