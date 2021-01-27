import React from "react";
import "./Input.scss"

export function Input({value, onChange, label, type = "text", width = '341px'}) {
    return <div className="admin-custom-input">
        <label
            className="admin-custom-input__label"
            htmlFor={value}>
            {label}
        </label>
        <input
            className="admin-custom-input__input"
            value={value}
            style={{width}}
            onChange={(event) => onChange(event.target.value)}
            id={label}
            type={type}/>
    </div>
}