import React from 'react'
import AdminLayout from "./pages/admin-layout/AdminLayout";
import Auth from "./pages/auth/Auth";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {isAuthorised} from "../../api/admin/auth";


export default function Admin() {
    const {url} = useRouteMatch();

    return <Switch>
        <Route exact
               path={`${url}/login`}>
            <Auth/>
        </Route>
        {isAuthorised() ?
            <Route path={`${url}`}>
                <AdminLayout/>
            </Route> :
            <Redirect to={`${url}/login`}/>
        }
    </Switch>

}
