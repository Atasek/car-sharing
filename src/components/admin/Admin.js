import React, {useState} from 'react'
import AdminPage from "./admin-page/AdminPage";
import Auth from "./auth/Auth";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";


export default function Admin() {
    const {url} = useRouteMatch();
    const [token, setToken] = useState(null);
    const [expiresIn, setExpiresIn] = useState(null);
    return <Switch>

        <Route exact
               path={`${url}/login`}>
            <Auth setAuthData={(authData) => {
                setToken(authData.token);
                setExpiresIn(authData.expiresIn);
            }}/>
        </Route>

        {token && <Route path={`${url}`}><AdminPage token={token}/></Route>
        || <Redirect to={`${url}/login`}/>}

    </Switch>

}
