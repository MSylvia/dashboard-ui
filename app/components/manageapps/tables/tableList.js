/**
 * Created by Darkstar on 1/2/2017.
 */
'use strict';

import React from 'react';
import Search from 'material-ui/svg-icons/action/search';
import {grey500} from 'material-ui/styles/colors';
import {FormControl, FormGroup, InputGroup} from 'react-bootstrap';

const iconStyles = {
    marginRight: 12,
    marginLeft: 12
};

const TableList = React.createClass({
    render: function () {
        return (
            <div className="tables">
                <div className="container">
                    <div className="project-head">
                        <p>Tables</p>
                        <FormGroup>
                            <InputGroup className="search">
                                <InputGroup.Addon>
                                    <Search style={iconStyles} color={grey500}/>
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder="Search"/>
                            </InputGroup>
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
});

export default TableList;
