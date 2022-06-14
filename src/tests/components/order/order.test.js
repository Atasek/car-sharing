import React from 'react';

import { render } from '@testing-library/react';

import OrderInfoRow from "../../../components/order/order-info/order-info-row/OrderInfoRow.js";
import OrderInfo from "../../../components/order/order-info/OrderInfo.jsx";
import OrderInfoButton from "../../../components/order/components/order-info-button/OrderInfoButton.js";
import Header from "../../../components/order/header/Header.js";
import Geolocation from "../../../components/order/order-steps/geolocation/Geolocation.js";
import Model from "../../../components/order/order-steps/model/Model.js";
import Summary from "../../../components/order/order-steps/summary/Summary";
import Addition from "../../../components/order/order-steps/addition/Addition";
import {STEPS} from "../../../components/order/step-switcher/StepSwitcher";

describe('Order component', () => {
    test('OrderInfoRow renders', () => {
        const { container } = render(<OrderInfoRow/>)
        expect(container.firstChild.classList.contains('order-info-row')).toBe(true)
    });
    test('OrderInfo renders', () => {
        render(<OrderInfo/>)
        const screen = render(<OrderInfo />)
        screen.container.getElementsByClassName('<order-info>')
    });
    test('OrderInfo renders', () => {
        render(<OrderInfo step={STEPS.LOCATION}/>)
    });
    test('OrderInfoButton renders', () => {
        render(<OrderInfoButton/>)
    });
    test('Header renders', () => {
        render(<Header/>)
    });
    test('Geolocation renders', () => {
        render(<Geolocation/>)
    });
    test('Model renders', () => {
        render(<Model/>)
    })
    test('Summary renders', () => {
        render(<Summary/>)
    });
    test('Order renders', () => {
        render(<OrderInfo/>)
    });test('Addition renders', () => {
        render(<Addition carColors="blue"/>)
    });
})
