import {ReactComponent as BlogIcon} from "../../../../img/blog-icon.svg";
import {ReactComponent as PostIcon} from "../../../../img/blog-post.svg";
import {ReactComponent as AddIcon} from "../../../../img/add-post.svg";
import React from "react";
import {cn} from "../../../../helpers";
import "./MobileNavbar.scss";
import {NavLink} from "react-router-dom";

export function MobileNavbar() {
    const mobileNavbarCn = cn('mobile-navbar');

    return (
        <div className={mobileNavbarCn()}>
            <NavLink
                to="/admin/car"
                className={mobileNavbarCn('card')}
                activeClassName={mobileNavbarCn('card', {active: true})}>
                <BlogIcon/>
            </NavLink>
            <NavLink
                to="/admin/models"
                className={mobileNavbarCn('card')}
                activeClassName={mobileNavbarCn('card', {active: true})}>
                <PostIcon/>
            </NavLink>
            <NavLink
                to="/admin/cities"
                className={mobileNavbarCn('card')}
                activeClassName={mobileNavbarCn('card', {active: true})}>
                <PostIcon/>
            </NavLink>
            <NavLink
                to="/admin/orders"
                className={mobileNavbarCn('card')}
                activeClassName={mobileNavbarCn('card', {active: true})}>
                <AddIcon/>
            </NavLink>
        </div>
    )
}