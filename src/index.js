import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/mainPageComponents/Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.scss';
import Order from "./components/order-page/Order";
import Admin from "./components/admin-panel/Admin";

import {
    BrowserRouter ,
    Route,
    Switch
} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path='/order' component={Order}
                />
                <Route path='/car-sharing' component={Main}
                />
                <Route path='/admin' component={Admin}/>
            </Switch>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
