import React from 'react'
import AdminPage from "./admin-page/AdminPage";
import Auth from "./auth/Auth";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {isAuthorised} from "../../api/common";


export default function Admin() {
    const {url} = useRouteMatch();

    return <Switch>
        <Route exact
               path={`${url}/login`}>
            <Auth/>
        </Route>
        {isAuthorised() ?
            <Route path={`${url}`}>
                <AdminPage/>
            </Route> :
            <Redirect to={`${url}/login`}/>
        }
    </Switch>

}
