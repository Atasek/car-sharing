import React from "react";
import "./AdminPage.scss"
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {AdminBar} from "./nvbar/AdminBar";
import {AdminHeader} from "./header/AdminHeader";
import {AdminFooter} from "./footer/AdminFooter";
import {AdminFault} from "./error/AdminFault";
import {AdminOrder} from "./orders/AdminOrder";
import {ModelsPage} from "./models/ModelsPage";
import {CarCard} from "./car-card/CarCard";
import {Cities} from "./cities/Cities";
import {CityCard} from "./city-card/CityCard";


export default function AdminPage() {
    const {url} = useRouteMatch();
    return <div className="admin">
        <AdminBar/>
        <div className="admin__description">
            <AdminHeader/>
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
