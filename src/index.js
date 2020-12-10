import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/mainPageComponents/Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.scss';
import Order from "./components/order-page/Order";
import Admin from "./components/admin-panel/Admin";

import {
    Route,
    Switch
} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>

        <Switch>
            <Route exact path="/car-sharing" render={() => <Main/>} />
            <Route exact path="/order" render={() => <Order/>} />
            <Route exact path="/admin" render={() => <Admin/>} />
            <Route
                path="/order/finished/:orderId?"
                render={() => <Order isFinished />}
            />
            </Switch>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
