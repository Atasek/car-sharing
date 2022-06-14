import {render} from "@testing-library/react";
import {STEPS, StepSwitcher} from "../../../components/order/step-switcher/StepSwitcher";
import React from "react";
import OrderInfoButton from "../../../components/order/components/order-info-button/OrderInfoButton";

import renderer from "react-test-renderer";
import OrderInfo from "../../../components/order/order-info/OrderInfo";

/*
test("it shows the expected component", () => {
    const { container } = render(<OrderInfoButton step={STEPS.SUMMARY}/>)
    expect(container.querySelectorAll('Заказать')).toBe(true)
});*/
describe("OrderInfoButton component", () => {
    test("component was rendering", () => {
        const tree = renderer
            .create(<OrderInfoButton step={STEPS.MODEL}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
describe("OrderInfo component", () => {
    test("component was rendering", () => {
        const tree = renderer
            .create(<OrderInfo step={STEPS.LOCATION}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
