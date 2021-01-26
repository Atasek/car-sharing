import {ReactComponent as ShapeIcon} from "../../../../img/shape.svg";
import {ReactComponent as NotificationIcon} from "../../../../img/notifications.svg";
import {ReactComponent as AvatarIcon} from "../../../../img/avatar.svg";
import {ReactComponent as DropIcon} from "../../../../img/dropdown-icon.svg";
import React from "react";
import "./AdminHeader.scss"

export function AdminHeader() {

    return <div className="admin-header">
        <div className="admin-header__search">
            <ShapeIcon/>
            <input className="admin-header__search-input" type="search" placeholder="Поиск..."/>
        </div>
        <div className="admin-header__notifications notifications">
            <NotificationIcon/>
        </div>
        <div className="admin-header__user user">
            <div className="user__avatar"><AvatarIcon/></div>
            <div className="user__name">Admin</div>
            <div className="user__drop">
                <DropIcon/>
            </div>
        </div>
    </div>
}