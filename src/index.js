import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.scss';
import Order from "./components/order-page/Order";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";


ReactDOM.render(
    <React.StrictMode>
        <Router >
                    <Route path="/order" component={Order}/>
                    <Route path="/" component={Main}/>
        </Router>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
