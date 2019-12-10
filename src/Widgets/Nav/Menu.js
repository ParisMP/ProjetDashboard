import React from "react";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Widgets from "../Widgets";


export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>Widgets</li>
            <li onClick={close}>Page Admin</li>
        </ul>
    </div>
);