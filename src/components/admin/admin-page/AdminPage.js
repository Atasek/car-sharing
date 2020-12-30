import React from "react";
import "./AdminPage.scss"
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {AdminBar} from "./nvbar/AdminBar";
import {AdminHeader} from "./header/AdminHeader";
import {AdminFooter} from "./footer/AdminFooter";
import {AdminFault} from "./error/AdminFault";
import {AdminOrder} from "./orders/AdminOrder";


export default function AdminPage() {
    const {url} = useRouteMatch();
    return <div className="admin">
        <AdminBar/>
        <div className="admin__description">
            <AdminHeader/>
            <div className="admin__content">
                <Switch>
                    <Route path={`${url}/orders`}><AdminOrder/></Route>
                    <Route path={`${url}/unknown`}><AdminFault/></Route>
                </Switch>
            </div>
            <AdminFooter/>
        </div>
    </div>
}