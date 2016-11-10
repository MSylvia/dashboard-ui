'use strict';

import React from 'react';

const Projecthead = React.createClass({
    render: function() {
        return (
            <div className="project-head">
                <p>Projects</p>
                <div className="btn">+ New Project</div>
            </div>
        );
    }
});

export default Projecthead;