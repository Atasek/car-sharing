import CustomSelect from "../../common/select/Select";
import React from "react";



    const periodOptions = [
        { label: "За все время", value: "" },
        { label: "За год", value: "year" },
        { label: "За месяц", value: "month" },
        { label: "За неделю", value: "week" },
        { label: "За день", value: "day" }
    ]

export function AdminCustomSelect() {
    return <CustomSelect/>
}