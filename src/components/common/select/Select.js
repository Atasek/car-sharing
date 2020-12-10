import {selectStyles} from "./select-styles";
import React from "react";
import Select from "react-select";

export default function CustomSelect({options, isDisabled, placeholder, onChange, value}) {
    return <Select
        isClearable="true"
        styles={selectStyles}
        placeholder={placeholder}
        value={value}
        options={options}
        isDisabled={isDisabled}
        onChange={onChange}
    />
}
