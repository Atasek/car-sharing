import React from 'react'
import './Main.scss';
import Hamburger from "./components/mainPageComponents/hamburger/Hamburger";
import LeftSidebar from "./components/mainPageComponents/left-sidebar/LeftSidebar";
import CustomCarousel from "./components/mainPageComponents/carousel/Carousel";
import CenterContent from "./components/mainPageComponents/maincenter-content/CenterContent";


function Main() {
    return (
        <div className="Main">
            <div className="main-page">
                <LeftSidebar/>
                <Hamburger/>
                <CenterContent/>
                <CustomCarousel/>
            </div>
        </div>
    );
}

export default Main;
