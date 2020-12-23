import React, {useState} from "react";
import "./Auth.scss"
import {ReactComponent as LogoIcon} from "../../../img/LogoIcon.svg";
import {auth} from "../../../api/admin";
import {AdminCustomInput} from "../components/AdminCustomInput";
import { useHistory } from "react-router-dom";
import {AdminCustomButton} from "../components/AdminCustomButton";

export default function Auth({setAuthData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    //  Авторизация не закончена, после отправки запроса как минимум сделать редирект, а перед этим что-то сделать с ответов запроса.
    async function authUser() {
        const response = await auth({
            username: email,
            password: password
        });
      setAuthData({token:response.access_token, expiresIn:response.expires_in});
      history.push('/admin')
    }

    return (
        <div className="enter__background">
        <div className="enter">
            <div className="enter__logo">
                <LogoIcon/>
                <div className="enter__logo__text">Need for drive</div>
            </div>
            <div className="enter__form">
                <div className="enter__title">Вход</div>
                <div className="enter__auth">
                    <AdminCustomInput
                        label="Почта"
                        onChange={setEmail}
                        value={email}

                    />
                    <AdminCustomInput
                        type="password"
                        label="Пароль"
                        onChange={setPassword}
                        value={password}
                    />
                </div>
                <div className="enter__footer">
                    <a href="#" className="footer__access">Запросить доступ</a>
                  <AdminCustomButton
                      onClick={authUser}
                      label="Войти"
                  />
                </div>
            </div>
        </div>
        </div>
    );
}
