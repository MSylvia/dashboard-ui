'use strict';

import React from 'react';
import Userimage from './userimage.jsx';

const Navlist = React.createClass({
    render: function() {
        return (
            <ul>
                <li>Upgrade</li>
                <li>Projects</li>
                <li>Groups</li>
                <li>Documentation & Help</li>
                <li><Userimage /></li>
            </ul>
        );
    }
});

export default Navlist;