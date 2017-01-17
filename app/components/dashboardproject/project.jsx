'use strict';

import React, {PropTypes} from 'react';
import ProjectName from './projectname.js';
import Progressbar from './progressbar.jsx';
import {Modal} from 'react-bootstrap';
import OptionsModal from './optionsModal';

import IconDelete from 'material-ui/svg-icons/action/delete';
import FileCloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import Key from 'material-ui/svg-icons/communication/vpn-key';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Icon from 'material-ui/svg-icons/file/cloud';
import ManageApp from 'material-ui/svg-icons/navigation/apps';
import {grey500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 12,
    marginLeft: 12
};

const logoStyles = {
    height: 50,
    width: 50,
    marginTop: 8,
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
        this.setState({showModal: true, selectedTab: "addDev", displayText: "Add Developers"});
    },
    open2() {
        this.setState({showModal: true, selectedTab: "keys", displayText: "App Keys"});
    },
    open3() {
        this.setState({showModal: true, selectedTab: "upgrade", displayText: "Upgrade Plan"});
    },
    delete(){
        this.setState({showModal: true, selectedTab: "delete", displayText: "Delete App"});
    },


    render: function () {
        let planName = "";
        if (this.props.planId == 1)
            planName = "Free Plan";

        return (
            <div className="project">
                <div className="plan-status">{planName}</div>
                <div className="app-info">
                    <div className="app-icon">
                        <Icon style={logoStyles} color={blue500}> </Icon>
                    </div>
                    <ProjectName
                        name={this.props.name}
                        appId={this.props.appId}
                    />
                    <Progressbar appId={this.props.appId} planId={this.props.planId}/>
                </div>
                <div className="project-option">
                    <div >
                        <PersonAdd style={iconStyles} color={grey500} onClick={this.open1}/>
                        <Key style={iconStyles} color={grey500} onClick={this.open2}/>
                        <FileCloudUpload style={iconStyles} color={grey500} onClick={this.open3}/>
                        <IconDelete style={iconStyles} color={grey500} onClick={this.delete}/>
                        <ManageApp style={iconStyles}
                                   color={grey500}
                                   onClick={() => this.props.onProjectClick(
                                       this.props.appId,
                                       this.props.keys.master,
                                       this.props.name
                                   )}
                        />
                    </div>
                    <Modal show={this.state.showModal} bsSize={ (this.state.selectedTab === 'upgrade') ? 'large' : null}
                           onHide={this.close} dialogClassName='options-modal'>
                        <Modal.Header closeButton>
                            <Modal.Title>{ this.state.displayText}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <OptionsModal id={this.props._id}
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
