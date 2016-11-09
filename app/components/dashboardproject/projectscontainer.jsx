'use strict';

import React from 'react';
import Project from './project.jsx';

const Projectscontainer = React.createClass({
    render: function() {
        return (
            <div className="projects-container">
                <div className="pure-g">
                    <Project />
                </div>
            </div>
        );
    }
});

export default Projectscontainer;