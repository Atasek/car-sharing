import {selectStyles} from "./select-styles";
import React from "react";
import Select from "react-select";

export default function CustomSelect({options, isDisabled, placeholder, onChange, value, styles=selectStyles}) {
    return <Select
        isClearable="true"
        styles={styles}
        placeholder={placeholder}
        value={value}
        options={options}
        isDisabled={isDisabled}
        onChange={onChange}
    />
}
