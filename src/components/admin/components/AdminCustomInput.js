import React from "react";
import "./AdminCustomInput.scss"

export function AdminCustomInput({value, onChange, label, type = "text"}) {
    return <div className="admin-custom-input">
        <label
            className="admin-custom-input__label"
            htmlFor={value}>
            {label}
        </label>
        <input
            className="admin-custom-input__input"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            id={label}
            type={type}/>
    </div>
}