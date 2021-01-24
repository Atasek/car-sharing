import React from "react";
import './Header.scss'
import {ReactComponent as IconGeolocation} from "../../../img/geolocation.svg";

export default function Header() {
        return <div className='header'>
                    <a className='header__logo' href="/">Need for drive</a>
                    <div className="header__geolocation">
                        <IconGeolocation/>
                        <a className="header__city" href="/#">Ульяновск</a>
                    </div>
                </div>;
}
