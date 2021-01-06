import {AdminCustomButton} from "../../components/AdminCustomButton";
import React from "react";

export function AdminFault() {
 return <div className="admin__fault fault">
    <div className="fault__code">500</div>
    <div className="fault__message">Что-то пошло не так</div>
    <div className="fault__advice">Попробуйте перезагрузить страницу</div>
    <div className="admin__button">
        <AdminCustomButton
        label="Назад" />
    </div>
 </div>
    }
