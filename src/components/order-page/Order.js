import React, {useState} from 'react'
import './Order.scss';
import LeftSidebar from "../mainPageComponents/left-sidebar/LeftSidebar";
import Header from "./header/Header";
import {STEPS, StepSwitcher} from "./step-switcher/StepSwitcher";
import OrderInfo from "./order-info/OrderInfo";
import OrderStatus from "./breadcrumb/Breadcrumb";

function Order() {
    const [step, nextStep] = useState(STEPS.LOCATION);
    const [order, setOrder] = useState({});
    const [orderNumber, setOrderNumber] = useState(null);

    async function confirmOrder() {
        // TODO: call modal and send request
        setOrderNumber(null); // TODO: GET /db/orderStatus/{data_id}
    }

    return (
        <div className="order">
            <LeftSidebar/>
            <div className="order__main">
                <Header/>
                <OrderStatus orderNumber={orderNumber} step={step}/>
                <div className="order__content">
                    <StepSwitcher
                        step={step}
                        handleOrder={(newOrder) => {
                            setOrder({...order, ...newOrder});
                        }}
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
