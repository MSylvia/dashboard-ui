'use strict';

import React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';

const Projecthead = React.createClass({
    getInitialState() {
        return {
            showModal: false,
            value: ''
        };
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
    },

    handleChange(e) {
        this.setState({value: e.target.value});
    },
    render: function () {

        return (
            <div className="project-head">
                <p>Projects</p>
                <div className="btn" onClick={this.open}>+ New App</div>
                <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>New App</Modal.Title>
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
                        <Button bsStyle="primary">Create App</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

export default Projecthead;
