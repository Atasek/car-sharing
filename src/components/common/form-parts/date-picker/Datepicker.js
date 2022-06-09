import React from "react";
import DatePicker from 'react-datepicker';
import "./Datepicker.scss";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatepicker({placeholder, selected, onChange, disabled, minDate, minTime, maxTime}) {
    return <DatePicker
        placeholderText={placeholder}
        selected={selected}
        onChange={onChange}
        className={disabled ? "datepicker__disabled datepicker" : "datepicker"}
        dateFormat="dd/MM/yyyy"
        isClearable
        maxTime={maxTime}
        minTime={minTime}
        minDate={minDate}
        disabled={disabled}
    />
}
