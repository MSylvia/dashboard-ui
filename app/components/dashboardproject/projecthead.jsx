import React from 'react';
import {Modal, Button, FormControl} from 'react-bootstrap';
import {addApp} from '../../actions';
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
        let temp = addApp(this.state.value);
        console.log("dispatch Add App :" + JSON.stringify(temp));
        this.props.dispatch(addApp(this.state.value));
        this.setState({
            showModal: false, value: ''
        });
    };

    render() {

        console.log(this.props);
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
                        <Button bsStyle="primary" onClick={this.createApp}>Create App</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    };
};

export default connect(null, mapDispatchToProps)(Projecthead);
