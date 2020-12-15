import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/mainPageComponents/Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.scss';
import Order from "./components/order-page/Order";
import LogIn from "./components/admin-panel/LogIn";

import {
    BrowserRouter ,
    Route,
    Switch
} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter >
            <Switch>
                <Route path='/car-sharing/admin' component={LogIn}
                />
                <Route path='/car-sharing/order' component={Order}
                />
                <Route path='/car-sharing' component={Main}
                />
            </Switch>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
