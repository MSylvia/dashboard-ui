/**
 * Created by Darkstar on 12/4/2016.
 */
import React from 'react';
import UserAccess from './userAccess';
import Upgrade from './upgrade';

import {Tab, Panel, Nav, NavItem, FormGroup, InputGroup, FormControl, Button, Clearfix} from 'react-bootstrap';

const AppSetting = () => {

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div>
                <Nav bsStyle="tabs">
                    <NavItem eventKey="first">
                        Add Developers
                    </NavItem>
                    <NavItem eventKey="second">
                        App Keys
                    </NavItem>

                    <NavItem eventKey="third">
                        Upgrade
                    </NavItem>
                </Nav>
                <Tab.Content animation>
                    <Tab.Pane eventKey="first">
                        <FormGroup>
                            <InputGroup>
                                <InputGroup.Addon>@</InputGroup.Addon>
                                <FormControl type="text" placeholder="example@example.com"/>
                            </InputGroup>
                            <Button bsStyle="primary">Invite</Button>
                        </FormGroup>
                        <Clearfix/>
                        <UserAccess />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        Tab 2 content
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Upgrade onSubmit={handleSubmit}/>
                    </Tab.Pane>
                </Tab.Content>

            </div>
        </Tab.Container>
    )
};

export default AppSetting;
