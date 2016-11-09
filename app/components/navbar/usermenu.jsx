'use strict';

import React from 'react';

const Usermenu = React.createClass({
    render: function() {
        return (
            <ul className="dropdown-menu">
                <li>My Profile</li>
                <li>Biling</li>
                <li>Log out</li>
            </ul>
        );
    }
});

export default Usermenu;