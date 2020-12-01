import React from "react";
import './LeftSidebar.scss'
import Hamburger from "../hamburger/Hamburger";

class LeftSidebar extends React.Component {
    render() {
        return <div className='sidebar'>
            <Hamburger/>
            <button className='sidebar__button sidebar__button-hidden'>Eng</button>
        </div>;
    }
}
export default LeftSidebar;
