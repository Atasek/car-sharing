import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/mainPageComponents/Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.scss';
import Order from "./components/order-page/Order";
import Admin from "./components/admin/Admin";
import {BrowserRouter, Route, Switch} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <Route path='/admin'>
                    <Admin/>
                </Route>
                <Route exact path='/order'>
                    <Order/>
                </Route>
                <Route exact path='/order/:id'>
                    <Order/>
                </Route>
            </Switch>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
