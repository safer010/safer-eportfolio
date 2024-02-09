import React from "react";

//materials
import ReactDOM  from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";//import css

//2nd step
const root = ReactDOM.createRoot(document.getElementById('root'));

//3rd step
root.render (
                <App/>
            )