import React from "react";
import "./Radio.scss";

export default function RadioInput({checked, value, onChange}) {
    return <div className="item">
        <input
            checked={checked}
            className="item__input"
            value={value}
            onChange={onChange}
            id={value}
            type="radio"/>
        <label
            className="item__label"
            htmlFor={value}>
            {value}
        </label>
    </div>
}
