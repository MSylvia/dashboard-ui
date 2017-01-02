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


const toolbartitle = {
    fontSize: 18
};

const toolBar = ({onLogoutClick}) => (
    <div style={{backgroundColor: '#FFF'}}>
        <Toolbar className='toolbar' style={{backgroundColor: '#FFF'}}>
            <ToolbarGroup firstChild={true}>
                <img className="icon" src="/.build/images/cblogo.png" alt="cloud"/>
            </ToolbarGroup>
            <ToolbarGroup>
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
            </ToolbarGroup>
        </Toolbar>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutClick: () => {
            dispatch(logOut());
        },
    };
};

export default connect(null, mapDispatchToProps)(toolBar);
