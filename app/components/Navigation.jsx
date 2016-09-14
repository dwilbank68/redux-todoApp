import React from 'react';
import {IndexLink, Link} from 'react-router';

const Navigation = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink to="/"  activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown"   activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li>
                        <p className="menu-text">Created by <span>David Wilbanks</span></p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;