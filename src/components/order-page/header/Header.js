import React, {useState} from "react";
import './Header.scss'
import {ReactComponent as IconGeolocation} from "../../../img/geolocation.svg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {STEPS, StepSwitcher} from "../step-switcher/StepSwitcher";

export default function Header(props) {
    const [step, setStep] = useState(STEPS.LOCATION);
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
            <div className='order__breadcrumb'>
                <Breadcrumb changeStep={(step) => setStep(step)}/>
            </div>
            <StepSwitcher step={step}/>
        </div>;
}