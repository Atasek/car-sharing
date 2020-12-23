import {ReactComponent as IconLogo} from "../../../../img/adminlogoicon.svg";
import {ReactComponent as BlogIcon} from "../../../../img/blog-icon.svg";
import {ReactComponent as PostIcon} from "../../../../img/blog-post.svg";
import {ReactComponent as AddIcon} from "../../../../img/add-post.svg";
import React from "react";
import "./AdminBar.scss"


export function AdminBar(){
    return <div className="admin__navbar">
        <div className="navbar__logo">
            <IconLogo/>
            <div className="logo__title">Need for drive</div>
        </div>
        <div className="navbar__menu menu">
            <div className="menu__card">
                <BlogIcon/>
                <div className="menu__card-title">Карточка автомобиля</div>
            </div>
            <div className="menu__card">
                <PostIcon/>
                <div className="menu__card-title">Список авто</div>
            </div>

            <div className="menu__card">
                <AddIcon/>
                <div className="menu__card-title">Заказы</div>
            </div>
        </div>
    </div>

}