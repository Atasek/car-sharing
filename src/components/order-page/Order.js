import React, {useState} from 'react'
import './Order.scss';
import Hamburger from "../mainPageComponents/hamburger/Hamburger";
import LeftSidebar from "../mainPageComponents/left-sidebar/LeftSidebar";
import {STEPS, StepSwitcher} from "./step-switcher/StepSwitcher";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import {Header} from "./header/Header";

// TODO: rename geolocation to geolocation
// TODO: выделить в отдельный компонент блок справа
// TODO:



function Order() {
    const [step, setStep] = useState(STEPS.LOCATION);
    return (
        <div className="order-page">
            <LeftSidebar/>
            <Hamburger/>
            <Header/>
            <Breadcrumb changeStep={(step) => setStep(step)}/>
            <StepSwitcher step={step}/>
        </div>
    );
}

export default Order;