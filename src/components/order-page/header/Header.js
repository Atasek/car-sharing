import React from "react";
import './Header.scss'
import {ReactComponent as IconGeolocation} from "../../../img/geolocation.svg";

export default function Header() {
        return <div className='order'>
            <div className='order__header'>
                <div className='main-header'>
                    <a className='main-header__logo' href="/#">Need for drive</a>
                    <div className="main-header__geo">
                        <IconGeolocation/>
                        <a className="main-header__geo-loc" href="/#">Ульяновск</a>
                    </div>
                </div>
            </div>
        </div>;
}
