import React from "react";
import "./AdminCustomInput.scss"

export function AdminCustomInput({value, onChange, label, type = "text", width = '341px'}) {
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