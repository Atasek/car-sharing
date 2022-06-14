import {render} from "@testing-library/react";
import React from "react";
import CenterContent from "../../../components/main/сenter-content/CenterContent.js";
import {BrowserRouter} from "react-router-dom";
import LeftSidebar from "../../../components/main/left-sidebar/LeftSidebar.js";
import CustomCarousel from "../../../components/main/carousel/Carousel.js";

describe('Main component', () => {
    test('LeftSidebar renders', () => {
        render(<LeftSidebar/>)
    });
    test('CenterContent renders', () => {
        const screen = render(
            <BrowserRouter>
            <CenterContent/>
        </BrowserRouter>)
        screen.container.getElementsByClassName('<center-content>')
    });
    test('CustomCarousel renders', () => {
        render(<CustomCarousel/>)
    });
})
