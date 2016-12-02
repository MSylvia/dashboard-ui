'use strict';

import React, {PropTypes} from 'react';
import Projectname from './projectname.js';
import Progressbar from './progressbar.jsx';

import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import Key from 'material-ui/svg-icons/communication/vpn-key';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Icon from 'material-ui/svg-icons/file/cloud';
import {grey500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 24,
};

const logoStyles = {
    height: 100,
    width: 100,
};

const Project = React.createClass({
    render: function () {
        console.log("inside Project component this.props: ");
        console.log(this.props);
        let planName = "";
        if (this.props.planId == 1)
            planName = "Free Plan";

        return (
            <div className="project">
                <p className="planstatus">{planName}</p>
                <Icon style={logoStyles} color={blue500}> </Icon>
                <Projectname name={this.props.name} edit={false}/>
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
