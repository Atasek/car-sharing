import React, {useState} from "react";
import "./Auth.scss"
import {ReactComponent as LogoIcon} from "../../../img/LogoIcon.svg";
import {auth, saveAuthorization} from "../../../api/admin";
import {AdminCustomInput} from "../components/AdminCustomInput";
import { useHistory } from "react-router-dom";
import {AdminCustomButton} from "../components/AdminCustomButton";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function authUser() {
        const response = await auth({
            username: email,
            password: password
        });
        saveAuthorization(response.access_token, response.expires_in);
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
                    <button className="footer__access">Запросить доступ</button>
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
