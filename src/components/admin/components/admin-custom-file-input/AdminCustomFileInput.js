import React from "react";
import {cn} from "../../../../helpers";
import "./AdminCustomFileInput.scss";

export function AdminCustomFileInput({onChange}) {
    const fileFieldCn = cn('file-field');
    return (
        <label className={fileFieldCn()}>
            <input
                className={fileFieldCn('input')}
                type="file"
                accept="image/*"
                onChange={(event) => onChange(event.target.files[0])}
            />
            <span className={fileFieldCn('labels-wrapper')}></span>
        </label>
    )
}