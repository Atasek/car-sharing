import React from "react";
import {ReactComponent as IconGeolocation} from "../../../img/geolocation.svg";
import './CenterContent.scss'
import {Link} from "react-router-dom";

class CenterContent extends React.Component {
    render() {
        return <div className='center-content'>
            <div className="center-content__header">
                <p className="center-content__header-logo">Need for drive</p>
                <div className="center-content__header-geo">
                    <IconGeolocation/>
                    <a className="center-content__header-geo-loc" href="/#">Ульяновск</a>
                </div>
            </div>
            <div className="center-content__middle">
                <div className="center-content__middle-form titles__wrapper">
                    <h1 className="center-content__middle-el1 ">Каршеринг</h1>
                    <h2 className="center-content__middle-el2 ">Need for drive</h2>
                    <p className="center-content__middle-el3 ">Поминутная аренда авто твоего города</p>
                </div><Link to="/car-sharing/order"><button className="middle__button">Забронировать</button></Link>
            </div>
            <div className="center-content__footer">
                <p className="center-content__footer-license ">© 2016-2019 «Need for drive»</p>
                <button className="center-content__footer__button">8 (495) 234-22-44</button>
            </div>
        </div>;
    }
}

export default CenterContent