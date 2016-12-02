'use strict';

import React from 'react';
import Projecthead from './projecthead.jsx';
import Projectscontainer from './projectscontainer.jsx';

const Dashboardproject = React.createClass({
    render: function() {
        return (
            <div className="dashproject">
                <div className="container">
                    <Projecthead />
                    <Projectscontainer  />
                </div>
            </div>
        );
    }
});

export default Dashboardproject;
