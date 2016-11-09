'use strict';

import React from 'react';

const Projecthead = React.createClass({
    render: function() {
        return (
            <div className="project-head">
                <h1>Projects</h1>
                <button>+ New Project</button>
            </div>
        );
    }
});

export default Projecthead;