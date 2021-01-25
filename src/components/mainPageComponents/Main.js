import React from 'react'
import './Main.scss';
import LeftSidebar from "./left-sidebar/LeftSidebar";
import CustomCarousel from "./carousel/Carousel";
import CenterContent from "./maincenter-content/CenterContent";


function Main() {
    return (
        <div className="Main">
            <div className="main-page">
                <LeftSidebar/>
                <CenterContent/>
                <CustomCarousel/>
            </div>
        </div>
    );
}

export default Main;