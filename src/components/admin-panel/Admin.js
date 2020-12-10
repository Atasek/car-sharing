import React from "react";
import "./Admin.scss"
import {ReactComponent as LogoIcon} from "../../../src/img/LogoIcon.svg";

function Admin() {
    return (

        <div className="enter">
            <div className="enter__logo">
                <LogoIcon/>
                <div className="enter__logo__text">Need for drive</div>
            </div>
            <div className="enter__form">
                <div className="enter__form__title">Вход</div>
                <div className="enter__form__input">
               <label className="enter__form__label email">Почта<input type="text"/></label>
                <label className="enter__form__label  password">Пароль<input type="password"/></label>
                </div>
                <div className="enter__footer">
                    <a href="#" className="enter__footer__access">Запросить доступ</a>
                    <button className="enter__footer__button">Войти</button></div>
            </div>
        </div>
    );
}
    export default Admin;