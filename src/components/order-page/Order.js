import React, {useState} from 'react'
import './Order.scss';
import LeftSidebar from "../mainPageComponents/left-sidebar/LeftSidebar";
import Header from "./header/Header";
import {STEPS, StepSwitcher} from "./step-switcher/StepSwitcher";
import OrderInfo from "./order-steps/OrderInfo";
import Breadcrumb from "./breadcrumb/Breadcrumb";

function Order() {
    const [step, nextStep] = useState(STEPS.LOCATION);
    const [order, setOrder] = useState({});

    async function confirmOrder() {
        // TODO: call modal and send request
    }

    return (
        <div className="order">
            <LeftSidebar/>
            <div class="order__main">
                <Header/>
                <Breadcrumb step={step}/>
                <div className="order__content">
                    <StepSwitcher
                        step={step}
                        handleOrder={(order) => setOrder(order)}
                    />
                    <OrderInfo
                        order={order}
                        nextStep={(step) => nextStep(step)}
                        confirmOrder={() => confirmOrder()}
                    />
                </div>
            </div>
        </div>
    );
}

export default Order;
