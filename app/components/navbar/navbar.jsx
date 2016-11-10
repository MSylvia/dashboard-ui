'use strict';

import React from 'react';
import Icon from './icon.jsx';
import Navlist from './navlist.jsx';

const Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar">
                <div className="container">
                    <Icon />
                    <Navlist />
                </div>
            </div>    
        );
    }
});

export default Navbar;