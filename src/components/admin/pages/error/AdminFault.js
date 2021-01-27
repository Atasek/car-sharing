import {Button} from "../../../common/button/Button";
import React from "react";
import {cn} from "../../../../helpers";
import "./AdminFault.scss";

export function AdminFault() {
    const faultCn = cn("fault");

    return <div className={faultCn()}>
        <div className={faultCn("code")}>500</div>
        <div className={faultCn("message")}>Что-то пошло не так</div>
        <div className={faultCn("advice")}>Попробуйте перезагрузить страницу</div>
        <Button label="Назад"/>
    </div>
}
