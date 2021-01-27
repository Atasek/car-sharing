import React from "react";
import {cn} from "../../../../helpers";
import "./FileInput.scss";

export function FileInput({onChange}) {
    const fileFieldCn = cn('file-field');

    function handleFile(event) {
        onChange(event.target.files[0]);
    }

    return (
        <label className={fileFieldCn()}>
            <input
                className={fileFieldCn('input')}
                type="file"
                accept="image/*"
                onChange={handleFile}
            />
            <span className={fileFieldCn('labels-wrapper')}></span>
        </label>
    )
}