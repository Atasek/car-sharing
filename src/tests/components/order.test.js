import React from 'react';

import { render } from '@testing-library/react';

import OrderInfoRow from "../../components/order/order-info/order-info-row/OrderInfoRow.js";
import OrderInfo from "../../components/order/order-info/OrderInfo.jsx";
import OrderInfoButton from "../../components/order/components/order-info-button/OrderInfoButton.js";
import Header from "../../components/order/header/Header.js";
import Geolocation from "../../components/order/order-steps/geolocation/Geolocation.js";
import Model from "../../components/order/order-steps/model/Model.js";
import {getCitiesForSelect, getDistributionPoints, getDistributionPointsForSelect} from "../../api/order";

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
    });
    test('the data is 14 cities', async () => {
        const data = await getCitiesForSelect();
        expect(data).toHaveLength(14);
    });
    test('the data is 5 points', async () => {
        const data = await getDistributionPoints();
        expect(data).toHaveLength(5);
    });
})
