import React from "react";
import "./OrderInfoRow.scss";

export default function OrderInfoRow({title, value}) {
    return <div className='order-info-row'>
        <span className='order-info-row__title'>{title}</span>
        <div className='order-info-row__line'/>
        <span className='order-info-row__value'>{value}</span>
    </div>
}
