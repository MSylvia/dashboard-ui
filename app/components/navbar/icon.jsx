'use strict';

import React from 'react';

const Icon = React.createClass({
    render: function() {
        return (
            <img className="icon" src=".build/images/cblogo.png" alt="cloud"/>
        );
    }
});

export default Icon;