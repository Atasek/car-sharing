import React from 'react';
import renderer, {create} from 'react-test-renderer';
import Geolocation from "../../../components/order/order-steps/geolocation/Geolocation";
import {render} from "@testing-library/react";
import {STEPS, StepSwitcher} from "../../../components/order/step-switcher/StepSwitcher";
import OrderInfo from "../../../components/order/order-info/OrderInfo";


describe("User component", () => {
    test("component was rendering", () => {
        const tree = renderer
            .create(<Geolocation/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe("StepSwitcher component", () => {
    test("it shows the expected component)", () => {
        const { container } = render(<StepSwitcher step={STEPS.LOCATION}/>)
        expect(container.firstChild.classList.contains('geolocation')).toBe(true)
    });
    test("it shows the expected component", () => {
        const { container } = render(<StepSwitcher step={STEPS.MODEL}/>)
        expect(container.firstChild.classList.contains('catalog')).toBe(true)
    });
   /* test("it shows the expected component", () => {
        const { container } = render(<StepSwitcher step={STEPS.ADDITION} order={car:{colors}}/>)
        expect(container.firstChild.classList.contains('addition')).toBe(true)
    });*/
    test("it shows the expected component", () => {
        const { container } = render(<StepSwitcher step={STEPS.SUMMARY}/>)
        expect(container.firstChild.classList.contains('summary')).toBe(true)
    });
});

describe("User component", () => {
    test("component was rendering", () => {
        const tree = renderer
            .create(<OrderInfo step={STEPS.SUMMARY}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
