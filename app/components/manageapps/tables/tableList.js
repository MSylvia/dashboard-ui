/**
 * Created by Darkstar on 1/2/2017.
 */
'use strict';

import React from 'react';
import Search from 'material-ui/svg-icons/action/search';
import {grey500} from 'material-ui/styles/colors';
import {FormControl, FormGroup, InputGroup, Modal, Button} from 'react-bootstrap';
import TablesContainer from './tableContainer';
import {createTable, setTableSearchFilter} from '../../../actions';
import {connect} from 'react-redux';

const iconStyles = {
    marginRight: 12,
    marginLeft: 12
};

class TableList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            value: ''
        };
    }

    close() {
        return this.setState({showModal: false});
    }

    open() {
        return this.setState({showModal: true});
    }

    handleChange(e) {
        return this.setState({value: e.target.value});
    }

    onCreateTable() {
        this.props.createTable(this.props.activeAppId, this.props.masterKey, this.state.value);
        this.setState({
            showModal: false, value: ''
        });
    }

    render() {
        return (
            <div className="tables">
                <div className="container">
                    <div className="tables-head">
                        <p>{this.props.name}</p>
                        <FormGroup>
                            <div className="btn" onClick={this.open}>+ New Table</div>
                            <InputGroup className="search">
                                <InputGroup.Addon>
                                    <Search style={iconStyles} color={grey500}/>
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder="Search"
                                             onChange={(e) => this.props.setTableSearchFilter(e.target.value)}/>
                            </InputGroup>
                        </FormGroup>
                        <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
                            <Modal.Header closeButton>
                                <Modal.Title>New Table</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input
                                    value={this.state.value}
                                    placeholder="Pick a good name"
                                    onChange={this.handleChange}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.close}>Cancel</Button>
                                <Button bsStyle="primary" onClick={this.onCreateTable}>Create App</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <TablesContainer />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeAppId: state.manageApp.appId,
        masterKey: state.manageApp.masterKey,
        name: state.manageApp.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTable: (activeAppId, masterKey, name) => dispatch(createTable(activeAppId, masterKey, name)),
        setTableSearchFilter: (filter) => dispatch(setTableSearchFilter(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableList);
