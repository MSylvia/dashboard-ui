'use strict';

import React, {PropTypes} from 'react';
import ProjectName from './projectname.js';
import Progressbar from './progressbar.jsx';
import {Modal} from 'react-bootstrap';
import AppSetting from './appSetting';

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

    getInitialState() {
        return {
            showModal: false,
            selectedTab: (typeof this.props.selectedTab !== 'undefined') ? this.props.selectedTab : 1
        };
    },

    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render: function () {
        console.log("inside Project component this.props: ");
        console.log(this.props);
        let planName = "";
        if (this.props.planId == 1)
            planName = "Free Plan";

        return (
            <div className="project">
                <div className="plan-status">{planName}</div>
                <Icon style={logoStyles} color={blue500}> </Icon>
                <ProjectName
                    name={this.props.name}
                    id={this.props._id}
                    edit={ (typeof this.props.editMode == 'undefined') ? false : this.props.editMode}
                />
                <Progressbar />
                <div className="project-option">
                    <div >
                        <FileCloudDownload style={iconStyles} color={grey500}/>
                        <FileCloudUpload style={iconStyles} color={grey500}/>
                        <Key style={iconStyles} color={grey500}/>
                        <PersonAdd style={iconStyles} color={grey500} onClick={this.open}/>
                    </div>
                    <Modal show={this.state.showModal} onHide={this.close} dialogClassName='app-setting'>
                        <Modal.Header closeButton>
                            <Modal.Title>Settings</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AppSetting />
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        );
    }
});

export default Project;
