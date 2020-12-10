import React from 'react'
import './Main.scss';
import Hamburger from "./hamburger/Hamburger";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import CustomCarousel from "./carousel/Carousel";
import CenterContent from "./maincenter-content/CenterContent";


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