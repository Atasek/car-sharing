import React, {useState} from 'react'
import './Order.scss';
import Hamburger from "../mainPageComponents/hamburger/Hamburger";
import LeftSidebar from "../mainPageComponents/left-sidebar/LeftSidebar";
import {STEPS, StepSwitcher} from "./step-switcher/StepSwitcher";
import Header from "./header/Header";

function Order() {
    return (
        <div className="order-page">
            <LeftSidebar/>
            <Hamburger/>
            <Header/>
        </div>
    );
}

export default Order;