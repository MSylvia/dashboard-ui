/**
 * Created by Darkstar on 12/4/2016.
 */
import React from 'react';
import UserAccess from './userAccess';
import Upgrade from './upgrade';
import Keys from './keys';
import DeleteApp from './deleteApp';
import {Tab, Nav, NavItem} from 'react-bootstrap';

const AppSetting = (props) => {

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={props.selectedTab}>
            <div>
                <Nav bsStyle="tabs">
                    <NavItem eventKey="addDev">
                        Add Developers
                    </NavItem>
                    <NavItem eventKey="keys">
                        App Keys
                    </NavItem>

                    <NavItem eventKey="upgrade">
                        Upgrade
                    </NavItem>
                    <NavItem eventKey="delete">
                        Delet App
                    </NavItem>
                </Nav>
                <Tab.Content animation>
                    <Tab.Pane eventKey="addDev">
                        <UserAccess id={props.id} appId={props.appId} invited={props.invited}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="keys">
                        <Keys id={props.id}
                              appId={props.appId}
                              clientKey={props.clientKey}
                              masterKey={props.masterKey}
                        />
                    </Tab.Pane>
                    <Tab.Pane eventKey="upgrade">
                        <Upgrade onSubmit={handleSubmit} planId={props.planId}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="delete">
                        <DeleteApp appId={props.appId}/>
                    </Tab.Pane>
                </Tab.Content>

            </div>
        </Tab.Container>
    );
};

export default AppSetting;
