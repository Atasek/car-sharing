import React, {useState} from "react";
import "./LogIn.scss"
import {ReactComponent as LogoIcon} from "../../../src/img/LogoIcon.svg";
import {auth} from "../../api/admin";


function LogIn() {

    const [email, setEmail] = useState((""));
    const [password, setPassword] = useState((""));

    async function RegisterUser() {
      await auth({
            username: email ,
            password: password
      });
    }

   /* function CorrectLogin(login) {
        setLogin(code);
        if (description === 'OK') {
            //login
        }*/
    return (


        <div className="enter">
            <div className="enter__logo">
                <LogoIcon/>
                <div className="enter__logo__text">Need for drive</div>
            </div>
            <div className="enter__form">
                <div className="enter__form__title">Вход</div>
                <div className="enter__form__input">
                    <label className="enter__form__label email">Почта<input className="input"
                        onChange={(event) => setEmail(event.target.value)} type="text"/></label>
                    <label className="enter__form__label  password">Пароль<input className="input"
                        onChange={(event) => setPassword(event.target.value)} type="password"/></label>
                </div>
                <div className="enter__footer">
                    <a href="#" className="enter__footer__access">Запросить доступ</a>
                    <button onClick={RegisterUser} className="enter__footer__button">Войти</button>

                </div>
            </div>
        </div>
    );
}

export default LogIn;