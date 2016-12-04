'use strict';

import React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';

class Projecthead extends React.Component {

    state = {
        showModal: false,
        value: ''
    };

    close = () => this.setState({showModal: false});

    open = () => this.setState({showModal: true});

    handleChange = (e) => this.setState({value: e.target.value});

    render() {
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
}

export default Projecthead;
