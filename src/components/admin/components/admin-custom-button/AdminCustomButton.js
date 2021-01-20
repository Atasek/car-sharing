import React from "react";
import "./AdminCustonButton.scss"

export function AdminCustomButton({onClick, label, styles}) {
    return <button className="admin__button"
                   type="button"
                   style={styles}
                   onClick={onClick}>
        {label}
    </button>
}