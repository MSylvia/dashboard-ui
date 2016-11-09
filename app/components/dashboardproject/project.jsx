'use strict';

import React from 'react';

const Project = React.createClass({
    render: function() {
        return (
            <div className="pure-u">
                <div className="project">
                    <div className="project-icon">
                        <img src="" alt=""/>
                    </div>
                    <h3>Project name</h3>
                    <p>Date of edit</p>
                    <div className="project-option">
                        <ul>
                            <li>∂</li>
                            <li>¥</li>
                            <li>∆</li>
                            <li>˚</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default Project;