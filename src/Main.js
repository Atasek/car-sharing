import React from 'react'
import './Main.scss';
import Hamburger from "./components/mainPageComponents/hamburger/Hamburger";
import LeftSidebar from "./components/mainPageComponents/left-sidebar/LeftSidebar";
import CenterContent from "./components/mainPageComponents/center-content/CenterContent";
import Carousel from "./components/mainPageComponents/carousel/carousel";


function Main() {
    return (
        <div className="Main">
            <div className="main-page">
                <LeftSidebar/>
                <Hamburger/>
                <CenterContent/>
                <Carousel/>
            </div>
        </div>
    );
}

export default Main;