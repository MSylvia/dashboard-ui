'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {logOut, deleteTable, editTable} from '../../actions';
import TableEdit from './tables/tableEdit';

import {grey500, blue500} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import LiveHelp from 'material-ui/svg-icons/communication/live-help';
import Documentation from 'material-ui/svg-icons/av/library-books';
import {Table, ButtonGroup} from 'react-bootstrap';
import NewFolder from 'material-ui/svg-icons/file/create-new-folder';
import TableIcon from 'material-ui/svg-icons/device/storage';
import RoleIcon from 'material-ui/svg-icons/hardware/security';
import UserIcon from 'material-ui/svg-icons/social/people';
import DeviceIcon from 'material-ui/svg-icons/hardware/smartphone';

const iconStyles = {
    marginRight: 12,
    marginLeft: 12,
    verticalAlign: "middle"
};

const iconStyles2 = {
    marginRight: 4,
    marginLeft: 12,
    width: 16,
    height: 16,
    verticalAlign: "middle"
};

const iconStyles3 = {
    marginRight: 4,
    marginLeft: 12,
    width: 20,
    height: 20,
    verticalAlign: "middle",
    marginTop: -4
};


const Manager = ({tables, onEditTable}) => {

    const getIcon = (tableType) => {
        switch (tableType) {
            case 'role':
                return <RoleIcon style={iconStyles2} color={blue500}/>;
            case 'user':
                return <UserIcon style={iconStyles2} color={blue500}/>;
            case 'device':
                return <DeviceIcon style={iconStyles2} color={blue500}/>;
            default:
                return <TableIcon style={iconStyles2} color={blue500}/>;
        }
    };

    return (
        <div id="main">
            <Table>
                <thead>
                <tr>
                    <td id="nav-dash" style={{backgroundColor: '#FFF'}}>
                        <div className="container">
                            <Toolbar className='toolbar manageAppToolbar' style={{backgroundColor: '#FFF'}}>
                                <ToolbarGroup>
                                    <img className="icon" src="/.build/images/cblogo.png" alt="cloud"/>

                                </ToolbarGroup>
                                <ToolbarGroup>
                                    <IconMenu iconButtonElement={
                                        <IconButton touch={true}>
                                            <LiveHelp style={iconStyles} color={grey500}/>
                                        </IconButton>
                                    }/>
                                    <IconMenu iconButtonElement={
                                        <IconButton touch={true}>
                                            <Documentation style={iconStyles} color={grey500}/>
                                        </IconButton>
                                    }/>
                                    <ToolbarSeparator />
                                    <IconMenu
                                        iconButtonElement={
                                            <IconButton touch={true}>
                                                <img className="userhead"
                                                     src="/.build/images/user-default-image.jpg"
                                                     alt=""/>
                                            </IconButton>
                                        }
                                    >
                                        <MenuItem primaryText="My Profile"/>
                                        <MenuItem primaryText="Billing"/>
                                        <MenuItem primaryText="Logout" onClick={() => this.props.onLogoutClick()}/>
                                    </IconMenu>
                                </ToolbarGroup>
                            </Toolbar>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Table>
                            <tbody>
                            <tr>
                                <td className="component">
                                    <Table>
                                        <tbody>
                                        <tr>
                                            <td className="component-sidebar">
                                                <Table>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{height: 33}}>
                                                            <div className="title" id="pages">
                                                                Tables
                                                                <span className="newbutton pull-right">Add Table</span>
                                                                <ButtonGroup className="newbutton pull-right">
                                                                    <NewFolder style={iconStyles3} color={grey500}/>
                                                                </ButtonGroup>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{verticalAlign: "middle"}}>
                                                            <div id="scroll-outer" className="content scroll-outer">
                                                                <ul className="scroll-inner">
                                                                    <ul>
                                                                        { tables.map((table) =>
                                                                            <li key={table.id} className="expanded"
                                                                                onClick={() => onEditTable(table.id)}>
                                                                                <a style={{paddingLeft: 16}}>
                                                                                    {getIcon(table.type)}
                                                                                    <span
                                                                                        className="t">{table.name}</span>
                                                                                </a>
                                                                            </li>)
                                                                        }
                                                                    </ul>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="component-sidebar-details">
                                                <Table className="sidebar-section" style={{width: 315}}>
                                                    <tbody>
                                                    <tr>
                                                        <td style={{height: 33}}>
                                                            <div className="title">
                                                                Components
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </td>
                                <td id="canvas" className="scroll-outer">
                                    <TableEdit/>
                                </td>

                                <td className="props">
                                    test
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
};


const mapStateToProps = (state) => {
    let tables = state.apps.filter(app => (app.appId === state.manageApp.appId))[0].tables;

    return {
        activeAppId: state.manageApp.appId,
        masterKey: state.manageApp.masterKey,
        tables: tables ? tables : []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutClick: () => {
            dispatch(logOut());
        },
        onEditTable: (tableId) => dispatch(editTable(tableId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Manager);
