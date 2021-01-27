import React, {useState} from "react";
import "./Auth.scss"
import {ReactComponent as LogoIcon} from "../../../../img/LogoIcon.svg";
import {auth} from "../../../../api/admin";
import {Input} from "../../../common/form-parts/input/Input";
import { useHistory } from "react-router-dom";
import {Button} from "../../../common/button/Button";
import {saveAuthorization} from "../../../../api/common";
import {cn} from "../../../../helpers";

export default function Auth() {
    const authCn = cn('auth');

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
        <div className={authCn()}>
            <div className={authCn('background')}>
                <div className={authCn('logo')}>
                    <LogoIcon/>
                    <div className={authCn('logo-title')}>Need for drive</div>
                </div>
                <form className={authCn('form')}>
                    <div className={authCn('title')}>Вход</div>
                    <div className={authCn('fields')}>
                        <div className={authCn('field')}>
                            <Input
                                label="Почта"
                                onChange={setEmail}
                                value={email}
                            />
                        </div>
                        <div className={authCn('field')}>
                        <Input
                            type="password"
                            label="Пароль"
                            onChange={setPassword}
                            value={password}
                        />
                        </div>
                    </div>
                    <div className={authCn('footer')}>
                        <button className={authCn('get-access')}>Запросить доступ</button>
                        <Button
                            onClick={authUser}
                            label="Войти"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
