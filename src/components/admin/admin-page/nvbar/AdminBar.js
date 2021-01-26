import {ReactComponent as IconLogo} from "../../../../img/adminlogoicon.svg";
import {ReactComponent as BlogIcon} from "../../../../img/blog-icon.svg";
import {ReactComponent as PostIcon} from "../../../../img/blog-post.svg";
import {ReactComponent as AddIcon} from "../../../../img/add-post.svg";
import React from "react";
import "./AdminBar.scss"
import {NavLink} from "react-router-dom";
import {cn} from "../../../../helpers";


export function AdminBar() {
    const navbarCn = cn('admin-navbar');
    
    return <div className={navbarCn()}>
        <div className={navbarCn('logo')}>
            <IconLogo/>
            <div className={navbarCn('logo-title')}>Need for drive</div>
        </div>
        <div>
            <NavLink
                to="/admin/car"
                className={navbarCn('card')}
                activeClassName={navbarCn('card', {active: true})}>
                <BlogIcon/>
                <span className={navbarCn('card-title')}>Карточка автомобиля</span>
            </NavLink>
            <NavLink
                to="/admin/models"
                className={navbarCn('card')}
                activeClassName={navbarCn('card', {active: true})}>
                <PostIcon/>
                <div className={navbarCn('card-title')}>Список авто</div>
            </NavLink>
            <NavLink
                to="/admin/cities"
                className={navbarCn('card')}
                activeClassName={navbarCn('card', {active: true})}>
                <PostIcon/>
                <span className={navbarCn('card-title')}>Список городов</span>
            </NavLink>
            <NavLink
                to="/admin/orders"
                className={navbarCn('card')}
                activeClassName={navbarCn('card', {active: true})}>
                <AddIcon/>
                <span className={navbarCn('card-title')}>Заказы</span>
            </NavLink>
        </div>
    </div>
}
