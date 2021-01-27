import "./OrderList.scss";
import {getCarImage} from "../../../../api/common";
import CustomCheckbox from "../../../common/form-parts/checkbox/Checkbox";
import React from "react";
import Approve from "../../../../img/approve.svg";
import Reject from "../../../../img/reject.svg";
import Change from "../../../../img/change.svg";
import {formatPriceNumber} from "../../../../helpers";
import {ADDITIONAL_SERVICES} from "../../../../consts";

export function OrderList({orders}) {
    return orders.map(order =>
            <div className="order-item" key={order.id}>
                <div className="order-item__description-wrapper">
                    <img
                        src={order.carId && getCarImage(order.carId.thumbnail.path)}
                        alt="car"
                        className="order-item__car-image"
                        referrerPolicy="origin"
                        crossOrigin="anonymous"
                    />
                    <div className="order-item__description">
                        <p>
                            <span className="order-item__car-name">{order.carId?.name || '—'} </span>
                            в
                            <span className="order-item__city"> {order.cityId?.name || '—'}</span>
                            <span>, {order.pointId?.address || '—'}</span>
                        </p>
                        <p className="order-item__date">12.06.2019 12:00 — 13.06.2019 12:00</p>
                        <p>
                            <span>Цвет: </span>
                            <span className="order-item__color-value">{order.color || '—'}</span>
                        </p>
                    </div>
                </div>
                <div className="order-item__additions">
                    {ADDITIONAL_SERVICES.map(additionalService =>
                    <CustomCheckbox
                        key={additionalService.label}
                        value={order[additionalService.key]}
                        label={additionalService.label}
                        checked={order[additionalService.key]}
                    />)}
                </div>
                <div className="order-item__price">{formatPriceNumber(order.price) || '—'} ₽</div>
                <div className="order-item__buttons">
                    <button className="order-item__button order-item__button_approve">
                        <img src={Approve} alt="Готово"/>
                        <span>Готово</span>
                    </button>
                    <button className="order-item__button order-item__button_reject">
                        <img src={Reject} alt="Отмена"/>
                        <span>Отмена</span>
                    </button>
                    <button className="order-item__button order-item__button_change">
                        <img src={Change} alt="Изменить"/>
                        <span>Изменить</span>
                    </button>
                </div>
            </div>
        )
}
