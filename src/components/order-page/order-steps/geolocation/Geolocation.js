import React from "react";
import "./Geolocation.scss"
import {ReactComponent as MapIcon} from "../../../../img/Rectangle.svg";
import {ReactComponent as InputCancelIcon} from "../../../../img/CancelVector.svg";
import Location from "../Location";




export default function Geolocation(props) {

    return <div className='geolocation'>
            <div className='geolocation__main'>
                <div className="pick-point">
                    <div className='pick-point__item'>
                        <div className='pick-point__item-type'>Город</div>
                        <input className='pick-point__item-input' type="text"
                               placeholder="Начните вводить город..."/>
                               <button className="pick-point__item-cancel">
                                   <InputCancelIcon/>
                               </button>
                    </div>
                    <div className='pick-point__item'>
                        <div className='pick-point__item-type'>Пункт выдачи</div>
                        <input className='pick-point__item-input' type="text"
                               placeholder="Начните вводить пункт..."/>
                        <button className="pick-point__item-cancel">
                            <InputCancelIcon/>
                        </button>
                    </div>
                    <div className='pick-point__map'>
                        <div className='pick-point__map-choice'>Выбрать на карте:</div>
                        <div className='img-map'>
                         <setPoints/>
                        </div>
                    </div>
                </div>
            </div>
        <div className='order__description'>
            <Location changeStep={(step) => props.changeStep(step)} />
        </div>
    </div>;
    }
