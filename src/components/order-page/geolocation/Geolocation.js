import React from "react";
import "./Geolocation.scss"
import {ReactComponent as MapIcon} from "../../../img/Rectangle.svg";

export class Geolocation extends React.Component {
    render() {
        return <div className='geolocation'>
            <div className='geolocation__main'>
                <div className="pick-point">
                    <div className='pick-point__item'>
                        <div className='pick-point__item-type'>Город</div>
                        <input className='pick-point__item-input' type="text"
                               placeholder="Начните вводить город..."/>
                    </div>
                    <div className='pick-point__item'>
                        <div className='pick-point__item-type'>Пункт выдачи</div>
                        <input className='pick-point__item-input' type="text"
                               placeholder="Начните вводить пункт..."/>
                    </div>
                    <div className='pick-point__map'>
                        <div className='pick-point__map-choice'>Выбрать на карте:</div>
                        <div className='img-map'>
                         <MapIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='order__description'>
                <div className='description__Your-order'>Ваш заказ</div>
                <div className='description__item'>
                    <div className='description__item-point'>Пункт выдачи</div>
                    <div className='description__item-line'></div>
                    <div className='description__item-status'></div>
                </div>
                <div className='description__item'>
                    <div className='description__item-point'>Модель</div>
                    <div className='description__item-line'></div>
                    <div className='description__item-status'></div>
                </div>
                <div className='description__item'>
                    <div className='description__item-point'>Цвет</div>
                    <div className='description__item-line'></div>
                    <div className='description__item-status'></div>
                </div>
                <div className='description__item'>
                    <div className='description__item-point'>Длительность аренды</div>
                    <div className='description__item-line'></div>
                    <div className='description__item-status'></div>
                </div>
                <div className='description__item'>
                    <div className='description__item-point'>Тариф</div>
                    <div className='description__item-line'></div>
                    <div className='description__item-status'></div>
                </div>
                <div className='description__item'>
                    <div className='description__item-point'>Полный бак</div>
                    <div className='description__item-line'></div>
                    <div className='description__item-status'></div>
                </div>
                <button className='description__button'>Выбрать модель</button>
            </div>
    </div>;
    }
    }