/**
 * Created by Darkstar on 12/4/2016.
 */
import React from 'react';
import UserAccess from './userAccess';
import Upgrade from './upgrade';
import Keys from './keys';

import IconDelete from 'material-ui/svg-icons/action/delete';
import {grey500} from 'material-ui/styles/colors';
const iconStyles = {
    marginRight: 12,
    marginLeft: 12
};

import {Tab, Nav, NavItem, FormGroup, InputGroup, FormControl, Button, Clearfix} from 'react-bootstrap';

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
                        <p>Are you sure? Deleting a app cannot be undone.
                            To confirm you wish to delete this project,
                            please type "DELETE" in the box below,
                            then click "Delete App":
                        </p>
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>
                                    <IconDelete style={iconStyles} color={grey500}/>
                                </InputGroup.Addon>
                                <FormControl type="text"/>
                            </InputGroup>
                            <Button bsStyle="danger">Delete App</Button>
                        </FormGroup>
                        <Clearfix/>
                    </Tab.Pane>
                </Tab.Content>

            </div>
        </Tab.Container>
    );
};

export default AppSetting;
