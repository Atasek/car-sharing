import React from "react";
import "./AdminCustonButton.scss"

export function AdminCustomButton({onClick, label}) {
    return <button className="admin__button"
                   type="button"
                   onClick={onClick}>
        {label}
    </button>
}