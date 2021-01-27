import React, {useState} from "react";
import {cn} from "../../../../helpers";
import "./CheckboxPicker.scss";
import CustomCheckbox from "../checkbox/Checkbox";

export function CheckboxPicker({values, onAdd, onRemove, label, width = '341px',}) {
    const pickerCn = cn('picker');
    const [currentValue, setCurrentValue] = useState('');

    function addValue() {
        if (currentValue.length === 0) {
            return;
        }
        onAdd(currentValue);
        setCurrentValue('');
    }
    return (
        <div className={pickerCn()}>
            <label
                className={pickerCn('label')}>
                {label}
            </label>
            <div
                className={pickerCn('input-wrapper')}
            >
                <input
                    className={pickerCn('input')}
                    value={currentValue}
                    onChange={(event) => setCurrentValue(event.target.value)}
                    type="text"
                />
                <button className={pickerCn('plus-button')} onClick={addValue}/>
            </div>
            {values.map(value =>
                <CustomCheckbox
                    key={value}
                    value={value}
                    onChange={(event) => onRemove(event.target.value)}
                    label={value}
                    checked={value}
                />)}
        </div>
    )
}