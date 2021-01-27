import React from "react";
import "./Button.scss"
import {cn} from "../../../helpers";

export function Button({onClick, label, styles, disabled}) {
    const adminButtonCn = cn('admin-button');

    return (
        <button className={adminButtonCn()}
                   type="button"
                   style={{...styles, opacity: disabled && '0.5'}}
                   disabled={disabled}
                   onClick={onClick}>
        {label}
    </button>
    )
}