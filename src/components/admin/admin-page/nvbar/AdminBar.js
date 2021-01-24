import {ReactComponent as IconLogo} from "../../../../img/adminlogoicon.svg";
import {ReactComponent as BlogIcon} from "../../../../img/blog-icon.svg";
import {ReactComponent as PostIcon} from "../../../../img/blog-post.svg";
import {ReactComponent as AddIcon} from "../../../../img/add-post.svg";
import React from "react";
import "./AdminBar.scss"
import {Link} from "react-router-dom";


export function AdminBar(){
    return <div className="admin__navbar">
        <div className="navbar__logo">
            <IconLogo/>
            <div className="logo__title">Need for drive</div>
        </div>
        <div className="navbar__menu menu">
            <div className="menu__card">
                <BlogIcon/>
                <div className="menu__card-title"><Link to="/admin/car">Карточка автомобиля</Link></div>
            </div>
            <div className="menu__card">
                <PostIcon/>
                <div className="menu__card-title"><Link to="/admin/models">Список авто</Link></div>
            </div>
            <div className="menu__card">
                <PostIcon/>
                <div className="menu__card-title"><Link to="/admin/cities">Список городов</Link></div>
            </div>
            <div className="menu__card">
                <AddIcon/>
                <div className="menu__card-title"><Link to="/admin/orders">Заказы</Link></div>
            </div>
        </div>
    </div>
}
