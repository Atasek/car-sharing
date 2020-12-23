import React from "react";
import "./AdminPage.scss"
import {ReactComponent as ShapeIcon} from "../../../img/shape.svg";
import {ReactComponent as NotificationIcon} from "../../../img/notifications.svg";
import {ReactComponent as NotificationCountIcon} from "../../../img/count.svg";
import {ReactComponent as AvatarIcon} from "../../../img/avatar.svg";
import {ReactComponent as DropIcon} from "../../../img/dropdown-icon.svg";
import {AdminCustomButton} from "../components/AdminCustomButton";
import {AdminBar} from "./nvbar/AdminBar";
import {AdminHeader} from "./header/AdminHeader";
import {AdminFooter} from "./footer/AdminFooter";


export default function AdminPage() {
    return <div className="admin">
        <AdminBar/>
        <div className="admin__description">
            <AdminHeader/>
            <div className="admin__content">
                <div className="admin__fault fault">
                    <div className="fault__code">500</div>
                    <div className="fault__message">Что-то пошло не так</div>
                    <div className="fault__advice">Попробуйте перезагрузить страницу</div>
                    <div className="admin__button"><AdminCustomButton
                        label="Назад"
                    />
                    </div>
                </div>
            </div>
            <AdminFooter/>
        </div>
    </div>
}