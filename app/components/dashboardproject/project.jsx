'use strict';

import React from 'react';
import Projectname from './projectname.jsx';
import Progressbar from './progressbar.jsx';

const Project = React.createClass({
    render: function() {
        return (
            <div className="pure-u">
                <div className="project">
                    <p className="planstatus">Free Plan</p>
                    <img className="project-icon" src=".build/images/cloudcache.png"/>
                    <Projectname />
                    <Progressbar />
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