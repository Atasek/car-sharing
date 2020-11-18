import React from "react";
import Model from "../order-steps/model/Model";
import Addition from "../order-steps/Addition";
import Summary from "../order-steps/Summary";
import Geolocation from "../order-steps/geolocation/Geolocation";

export const STEPS = {
    LOCATION: "location",
    MODEL: "model",
    ADDITION: "addition",
    SUMMARY: "summary"
}

export function StepSwitcher(props) {
    const step = props.step;
    if (step === STEPS.LOCATION) {
        return <Geolocation/>;
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