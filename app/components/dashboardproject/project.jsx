'use strict';

import React, {PropTypes} from 'react';
import ProjectName from './projectname.js';
import Progressbar from './progressbar.jsx';
import {Modal} from 'react-bootstrap';
import AppSetting from './appSetting';

import IconDelete from 'material-ui/svg-icons/action/delete';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import Key from 'material-ui/svg-icons/communication/vpn-key';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Icon from 'material-ui/svg-icons/file/cloud';
import {grey500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 12,
    marginLeft: 12
};

const logoStyles = {
    height: 100,
    width: 100,
};

const Project = React.createClass({

    getInitialState() {
        return {
            showModal: false,
            selectedTab: (typeof this.props.selectedTab !== 'undefined') ? this.props.selectedTab : "addDev"
        };
    },

    handleSelect(selectedKey) {
        alert('selected ' + selectedKey);
    },

    close() {
        this.setState({showModal: false});
    },

    open1() {
        this.setState({showModal: true, selectedTab: "addDev"});
    },
    open2() {
        this.setState({showModal: true, selectedTab: "keys"});
    },
    open3() {
        this.setState({showModal: true, selectedTab: "upgrade"});
    },
    delete(){
        this.setState({showModal: true, selectedTab: "delete"});
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
                    appId={this.props.appId}
                />
                <Progressbar />
                <div className="project-option">
                    <div >
                        <PersonAdd style={iconStyles} color={grey500} onClick={this.open1}/>
                        <Key style={iconStyles} color={grey500} onClick={this.open2}/>
                        <FileCloudUpload style={iconStyles} color={grey500} onClick={this.open2}/>
                        <IconDelete style={iconStyles} color={grey500} onClick={this.delete}/>
                    </div>
                    <Modal show={this.state.showModal} onHide={this.close} dialogClassName='app-setting'>
                        <Modal.Header closeButton>
                            <Modal.Title>Settings</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AppSetting id={this.props._id}
                                        appId={this.props.appId}
                                        masterKey={this.props.keys.master}
                                        clientKey={this.props.keys.js}
                                        planId={this.props.planId}
                                        invited={this.props.invited}
                                        selectedTab={this.state.selectedTab}
                            />
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        );
    }
});

export default Project;
