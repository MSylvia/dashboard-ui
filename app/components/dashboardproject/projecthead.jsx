import React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import {addApp, createRoleTable} from '../../actions';
import {connect} from 'react-redux';

class Projecthead extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            value: ''
        };
    }

    close = () => this.setState({showModal: false});

    open = () => this.setState({showModal: true});

    handleChange = (e) => this.setState({value: e.target.value});

    createApp = () => {
        this.props.dispatch(addApp(this.state.value));
        this.setState({
            showModal: false, value: ''
        });
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.newAppCreated)
            nextProps.createRoleTable(nextProps.appId, nextProps.masterKey);
    };

    render() {

        console.log(this.props);
        return (
            <div className="project-head">
                <h1 className="dashboard-title pull-left">Apps</h1>
                <div className="btn" onClick={this.open}>+ New App</div>
                <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>New App</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl type="text"
                                     value={this.state.value}
                                     placeholder="Pick a good name"
                                     onChange={this.handleChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Cancel</Button>
                        <Button bsStyle="primary" onClick={this.createApp}>Create App</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    if (state == null) {
        return {newAppCreated: false}
    }

    let newAppCreated = (state.manageApp.newAppCreated ? true : false);
    return {
        newAppCreated: newAppCreated,
        masterKey: state.apps.length > 0 ? state.apps[state.apps.length - 1].keys.master : "",
        appId: state.apps.length > 0 ? state.apps[state.apps.length - 1].appId : ""
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
        createRoleTable: (appId, masterKey) => dispatch(createRoleTable(appId, masterKey))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projecthead);
