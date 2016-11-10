'use strict';

import React from 'react';
import Userimage from './userimage.jsx';
import Usermenu from './usermenu.jsx';

const Navlist = React.createClass({
    render: function() {
        return (
            <ul className="navlist inlinelist">
                <li>Projects</li>
                <li>Documentation & Help</li>
                <li className="userbox">
                    <Userimage />
                    <Usermenu />
                </li>
            </ul>
        );
    }
});

export default Navlist;