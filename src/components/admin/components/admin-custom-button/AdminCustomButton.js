import React from "react";
import "./AdminCustonButton.scss"

export function AdminCustomButton({onClick, label, styles, disabled}) {
    return <button className="admin__button"
                   type="button"
                   style={{...styles, opacity: disabled && '0.5'}}
                   disabled={disabled}
                   onClick={onClick}>
        {label}
    </button>
}