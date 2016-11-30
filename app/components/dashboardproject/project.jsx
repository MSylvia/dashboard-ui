'use strict';

import React from 'react';
import Projectname from './projectname.jsx';
import Progressbar from './progressbar.jsx';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import Key from 'material-ui/svg-icons/communication/vpn-key';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Icon from 'material-ui/svg-icons/file/cloud';
import {grey500,blue500} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 24,
};

const logoStyles = {
    height: 100,
    width: 100,
};

const Project = React.createClass({
    render: function () {
        return (
            <div className="project">
                <p className="planstatus">Free Plan</p>
                <Icon style={logoStyles} color={blue500}> </Icon>
                <Projectname />
                <Progressbar />
                <div className="project-option">
                    <div >
                        <FileCloudDownload style={iconStyles} color={grey500}/>
                        <FileCloudUpload style={iconStyles} color={grey500}/>
                        <Key style={iconStyles} color={grey500}/>
                        <PersonAdd style={iconStyles} color={grey500}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default Project;
