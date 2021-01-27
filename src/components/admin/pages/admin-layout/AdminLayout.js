import React, {useEffect, useState} from "react";
import "./AdminLayout.scss"
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {AdminBar} from "../../common/navbar/AdminBar";
import {AdminHeader} from "../../common/header/AdminHeader";
import {AdminFooter} from "../../common/footer/AdminFooter";
import {AdminFault} from "../error/AdminFault";
import {AdminOrder} from "../orders/AdminOrder";
import {ModelsPage} from "../models/ModelsPage";
import {CarCard} from "../car-card/CarCard";
import {Cities} from "../cities/Cities";
import {CityCard} from "../city-card/CityCard";
import {MobileNavbar} from "../../common/mobile-navbar/MobileNavbar";


export default function AdminLayout() {
    const {url} = useRouteMatch();
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function isMobile() {
        return width <= 768;
    }

    return <div className="admin">
        {!isMobile() && <AdminBar/>}
        <div className="admin__description">
            <AdminHeader/>
            {isMobile() && <MobileNavbar/>}
            <div className="admin__content">
                <Switch>
                    <Route exact path={`${url}`}><AdminFault/></Route>
                    <Route exact path={`${url}/car`}><CarCard/></Route>
                    <Route exact path={`${url}/car/:id`}><CarCard/></Route>
                    <Route path={`${url}/orders`}><AdminOrder/></Route>
                    <Route path={`${url}/models`}><ModelsPage/></Route>
                    <Route path={`${url}/cities`}><Cities/></Route>
                    <Route exact path={`${url}/city`}><CityCard/></Route>
                    <Route exact path={`${url}/city/:id`}><CityCard/></Route>
                    <Route path={`${url}/unknown`}><AdminFault/></Route>
                </Switch>
            </div>
            <AdminFooter/>
        </div>
    </div>
}
