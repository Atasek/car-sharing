import React from "react";
import Model from "../order-steps/Model";
import Location from "../order-steps/Location";
import Addition from "../order-steps/Addition";
import Summary from "../order-steps/Summary";

export const STEPS = {
    LOCATION: "location",
    MODEL: "model",
    ADDITION: "addition",
    SUMMARY: "summary"
}

export function StepSwitcher(props) {
    const step = props.step;
    if (step === STEPS.LOCATION) {
        debugger;
        return <Location/>;
    }
    if (step === STEPS.MODEL) {
        return <Model/>;
    }
    if (step === STEPS.ADDITION) {
        return <Addition/>;
    }
    if (step === STEPS.SUMMARY) {
        return <Summary/>;
    }
}