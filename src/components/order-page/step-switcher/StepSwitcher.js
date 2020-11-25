import React, {useState} from "react";
import Model from "../order-steps/model/Model";
import Addition from "../order-steps/addition/Addition";
import Summary from "../order-steps/Summary";
import Geolocation from "../order-steps/geolocation/Geolocation";

export const STEPS = {
    LOCATION: "location",
    MODEL: "model",
    ADDITION: "addition",
    SUMMARY: "summary"
}

export function StepSwitcher(props) {
    const [step, setStep] = useState(STEPS.LOCATION);
    function changeStep(step) {
        setStep(step);
        props.changeStep(step);
    }
    if (step === STEPS.LOCATION) {
        return <Geolocation changeStep={(step) => changeStep(step)}/>;
    }
    if (step === STEPS.MODEL) {
        return <Model changeStep={(step) => changeStep(step)}/>;
    }
    if (step === STEPS.ADDITION) {
        return <Addition changeStep={(step) => changeStep(step)}/>;
    }
    if (step === STEPS.SUMMARY) {
        return <Summary changeStep={(step) => changeStep(step)}/>;
    }
}