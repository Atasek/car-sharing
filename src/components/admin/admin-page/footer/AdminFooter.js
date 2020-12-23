import React from "react";
import "./AdminFooter.scss"
export function AdminFooter() {
    return <div className="admin__footer footer">
        <div className="footer__links">
            <a href="/car-sharing/" className="footer__link">Главная страница</a>
            <a href="/car-sharing/" className="footer__link">Ссылка</a>
        </div>
        <div className="footer__title">Copyright © 2020 Simbirsoft</div>
    </div>
    }