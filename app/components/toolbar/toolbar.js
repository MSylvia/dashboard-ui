/**
 * Created by Darkstar on 11/29/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {logOut} from '../../actions';
import Storage from 'material-ui/svg-icons/device/storage';
import Analytics from 'material-ui/svg-icons/editor/insert-chart';
import Setting from 'material-ui/svg-icons/action/settings';
import Cache from 'material-ui/svg-icons/image/flash-on';
import Queues from 'material-ui/svg-icons/action/compare-arrows';
import Notifications from 'material-ui/svg-icons/alert/add-alert';
import Email from 'material-ui/svg-icons/communication/email';
import {grey500} from 'material-ui/styles/colors';

const toolbartitle = {
    fontSize: 18
};

const iconStyles = {
    marginRight: 12,
    marginLeft: 12
};

const toolBar = ({onLogoutClick, showOthers}) => (
    <div id= "nav-dash" style={{backgroundColor: '#FFF'}}>
        <div className="container">
            <Toolbar className='toolbar' style={{backgroundColor: '#FFF'}}>
                <ToolbarGroup>
                    <img className="icon" src="/.build/images/cblogo.png" alt="cloud"/>

                </ToolbarGroup>
                {
                    showOthers ? (
                            <ToolbarGroup>
                                <IconMenu iconButtonElement={
                                    <IconButton touch={true}>
                                        <Storage style={iconStyles} color={grey500}/>
                                    </IconButton>
                                }/>
                                <IconMenu iconButtonElement={
                                    <IconButton touch={true}>
                                        <Analytics style={iconStyles} color={grey500}/>
                                    </IconButton>
                                }/>
                                <IconMenu iconButtonElement={
                                    <IconButton touch={true}>
                                        <Setting style={iconStyles} color={grey500}/>
                                    </IconButton>
                                }/>
                                <IconMenu iconButtonElement={
                                    <IconButton touch={true}>
                                        <Cache style={iconStyles} color={grey500}/>
                                    </IconButton>
                                }/>
                                <IconMenu iconButtonElement={
                                    <IconButton touch={true}>
                                        <Queues style={iconStyles} color={grey500}/>
                                    </IconButton>
                                }/>
                                <IconMenu iconButtonElement={
                                    <IconButton touch={true}>
                                        <Notifications style={iconStyles} color={grey500}/>
                                    </IconButton>
                                }/>
                                <IconMenu iconButtonElement={
                                    <IconButton touch={true}>
                                        <Email style={iconStyles} color={grey500}/>
                                    </IconButton>
                                }/>
                                <ToolbarSeparator />
                                <ToolbarTitle style={toolbartitle} text=""/>
                                <ToolbarTitle style={toolbartitle} text="Quickstart"/>
                                <ToolbarTitle style={toolbartitle} text="Notifications"/>
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
                                    <MenuItem primaryText="Logout" onClick={() => onLogoutClick()}/>
                                </IconMenu>
                            </ToolbarGroup>) : <ToolbarGroup><ToolbarTitle style={toolbartitle} text="Quickstart"/>
                            <ToolbarTitle style={toolbartitle} text="Notifications"/>
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
                                <MenuItem primaryText="Logout" onClick={() => onLogoutClick()}/>
                            </IconMenu></ToolbarGroup>
                }
            </Toolbar>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {showOthers: state.manageApp.viewActive};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutClick: () => {
            dispatch(logOut());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toolBar);
