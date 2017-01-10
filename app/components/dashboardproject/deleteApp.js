/**
 * Created by Darkstar on 12/21/2016.
 */
/**
 * Created by Darkstar on 12/2/2016.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {deleteApp} from '../../actions';
import {FormGroup, InputGroup, FormControl, Clearfix, Button} from 'react-bootstrap';

import IconDelete from 'material-ui/svg-icons/action/delete';
import {grey500} from 'material-ui/styles/colors';
const iconStyles = {
    marginRight: 12,
    marginLeft: 12
};

class DeleteApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonState: false
        };
    }

    render() {

        const handleChange = (e) => {
            if (e.target.value === "DELETE") this.setState({buttonState: true});
        };

        return (
            <div  className="tab-content">
                <p>Are you sure? Deleting an app cannot be undone.
                    To confirm you wish to delete this project,
                    please type "DELETE" in the box below,
                    then click "Delete App":
                </p>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>
                            <IconDelete style={iconStyles} color={grey500}/>
                        </InputGroup.Addon>
                        <FormControl type="text" onChange={handleChange}/>
                    </InputGroup>
                    <Button bsStyle="danger" disabled={this.state.buttonState === false}
                            onClick={() => this.props.onDelete(this.props.appId) }>Delete
                        App</Button>
                </FormGroup>
                <Clearfix/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (appId) => {
            dispatch(deleteApp(appId));
        }
    };
};

export default connect(null, mapDispatchToProps)(DeleteApp);
