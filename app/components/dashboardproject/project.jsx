'use strict';

import React from 'react';

const Project = React.createClass({
    render: function() {
        return (
            <div className="pure-u">
                <div className="project">
                    <img className="project-icon" src=".build/images/cloudcache.png"/>
                    <p>Cloudboost</p>
                    <p>Last edited Nov 8,2016</p>
                    <div className="project-option">
                        <ul>
                            <li><img src=".build/images/clouddownload.svg" alt=""/></li>
                            <li><img src=".build/images/share.svg" alt=""/></li>
                            <li><img src=".build/images/duplicate.svg" alt=""/></li>
                            <li><img src=".build/images/dustbin.svg" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default Project;