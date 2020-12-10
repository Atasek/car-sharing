import React from "react";
import {ReactComponent as IconTelegram} from "../../../img/Telegram_white.svg";
import {ReactComponent as IconFacebook} from "../../../img/Facebook_white.svg";
import {ReactComponent as IconInstagram} from "../../../img/Instagram_white.svg";
import './Hamburger.scss'

class Hamburger extends React.Component {
    render() {

        return <div className="menu">
            <input id="menu__toggle" type="checkbox"/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span/>
            </label>

            <ul className="menu__list">
                <li><a className="menu__item" href="/#">ПАРКОВКА</a></li>
                <li><a className="menu__item" href="/#">СТРАХОВКА</a></li>
                <li><a className="menu__item" href="/#">БЕНЗИН</a></li>
                <li><a className="menu__item" href="/#">ОБСЛУЖИВАНИЕ</a></li>
                <li><a className="menu__item" href="/#">
                    <div className="menu__social-networks">
                        <button className="menu__social-network-button"><IconTelegram/></button>
                        <button className="menu__social-network-button"><IconFacebook/></button>
                        <button className="menu__social-network-button"><IconInstagram/></button>
                    </div>
                </a></li>
            </ul>
            <div className="menu__carousel-background"/>

        </div>
    }
}

export default Hamburger;