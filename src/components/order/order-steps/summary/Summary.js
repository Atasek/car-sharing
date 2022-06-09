import React from "react";
import "./Summary.scss";
import {formatCarNumber, formatDate} from "../../../../helpers";
import {CORS_URL} from "../../../../api/common";

export default function Summary({order}) {

    return <div className="summary">
        {order?.car && <div>
            <p className="summary__title">{order.car.name}</p>
            <p className="summary__number">{formatCarNumber(order.car.number)}</p>
            <div><span className="summary__subtitle">Топливо </span><span>{order.isFullTank ? "100%" : `${order.car.tank}%`}</span></div>
            <div className="summary__date"><span className="summary__subtitle">Доступна с </span><span>{formatDate(order.dateFrom)} 12:00</span></div>
        </div>}
        <div className="summary__car-wrapper">
            <img className="summary__car"
                 src={(order?.car.thumbnail.path.includes('base64') && order?.car.thumbnail.path) ||
                 `${CORS_URL}http://api-factory.simbirsoft1.com${order?.car.thumbnail.path}`}
                 referrerPolicy='origin'
                 crossOrigin='anonymous'
                 alt={order?.car.name}/>
        </div>
    </div>
}
