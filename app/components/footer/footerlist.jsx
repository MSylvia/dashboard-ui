'use strict';

import React from 'react';

const Footerlist = React.createClass({
    render: function() {
        return (
            <span >
                <a className="link">© Cloudboost</a>
                <a className="link">Terms</a>
                <a className="link">Privacy</a>
                <a className="link">Help</a>
                <a className="link">Feedback</a>
            </span>
        );
    }
});

export default Footerlist;
