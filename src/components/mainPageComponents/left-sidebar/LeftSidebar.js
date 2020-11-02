import React from "react";
import './LeftSidebar.scss'

class LeftSidebar extends React.Component {
    render() {
        return <div className='sidebar'>
            <button className='sidebar__button sidebar__button-hidden'>Eng</button>
        </div>;
    }
}
export default LeftSidebar;