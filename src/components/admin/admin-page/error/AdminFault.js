import {AdminCustomButton} from "../../components/AdminCustomButton";
import React from "react";
import {cn} from "../../../../helpers";

export function AdminFault() {
    const faultCn = cn("fault");

    return <div className={faultCn()}>
        <div className={faultCn("fault")}>500</div>
        <div className={faultCn("message")}>Что-то пошло не так</div>
        <div className={faultCn("advice")}>Попробуйте перезагрузить страницу</div>
        <AdminCustomButton label="Назад"/>
    </div>
}
