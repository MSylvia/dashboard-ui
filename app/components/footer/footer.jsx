'use strict';

import React from 'react';
import Footerlist from './footerlist.jsx';

const Footer = React.createClass({
    render: function() {
        return (
            <div className="footer">
                <div className="container">
                    <Footerlist />
                </div>
            </div>
        );
    }
});

export default Footer;