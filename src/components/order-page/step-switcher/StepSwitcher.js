import React from "react";
import Model from "../order-steps/model/Model";
import Addition from "../order-steps/addition/Addition";
import Summary from "../order-steps/summary/Summary";
import Geolocation from "../order-steps/geolocation/Geolocation";

export const STEPS = {
    LOCATION: "location",
    MODEL: "model",
    ADDITION: "addition",
    SUMMARY: "summary"
}

export function StepSwitcher(props) {

    function handleOrder(order) {
        props.handleOrder(order);
    }

    if (props.step === STEPS.LOCATION) {
        return <Geolocation changeOrder={handleOrder}/>;
    }
    if (props.step === STEPS.MODEL) {
        return <Model changeOrder={handleOrder}/>;
    }
    if (props.step === STEPS.ADDITION) {
        return <Addition carColors={props.order.car.colors} changeOrder={handleOrder}/>;
    }
    if (props.step === STEPS.SUMMARY) {
        return <Summary order={props.order}/>;
    }
}
