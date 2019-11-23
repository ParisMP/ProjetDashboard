import React from 'react';
import './TopNavBar.css';

const Topnav = props => (
    <header className="Topbar">
        <br></br>
        <b href="/">MUSIC DASHBOARD</b>
        <br></br>
        <div className="toolbar_widget_list">
            <ul>
                <li><a href="/">widget 1</a></li>
                <li><a href="/">widget 2</a></li>
                <li><a href="/">widget 3</a></li>
                <li><a href="/">widget 4</a></li>
                <li><a href="/">widget 5</a></li>
                <li><a href="/">widget 6</a></li>
            </ul>
        </div>
    </header>
);

export default Topnav;