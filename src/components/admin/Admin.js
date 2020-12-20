import React, {useState} from 'react'
import AdminPage from "./admin-page/AdminPage";
import Auth from "./auth/Auth";
import {Redirect, Route, Switch} from "react-router-dom";


export default function Admin() {
    const [token, setToken] = useState(null);
    const [expiresIn, setExpiresIn] = useState(null);
    return <Switch>
        <Route exact
               path='/car-sharing/admin/login'>
            <Auth setAuthData={(authData) => {
                setToken(authData.token);
                setExpiresIn(authData.expiresIn);
            }}/>
        </Route>
        {token && <Route exact path='/car-sharing/admin'><AdminPage/></Route>
        || <Redirect to="/car-sharing/admin/login"/>}
    </Switch>

}
