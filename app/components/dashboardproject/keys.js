/**
 * Created by Darkstar on 12/21/2016.
 */
/**
 * Created by Darkstar on 12/2/2016.
 */
'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {genClientKey, genMasterKey} from '../../actions';
import {FormGroup, InputGroup, FormControl, Clearfix} from 'react-bootstrap';

class Keys extends React.Component {
    render() {
        return (
            <div className="tab-content">
                <FormGroup>
                    <label>App ID</label>
                    <InputGroup>
                        <InputGroup.Addon><strong>COPY</strong></InputGroup.Addon>
                        <FormControl type="text" value={this.props.appId} disabled/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="firstName">Master Key</label>
                    <InputGroup>
                        <InputGroup.Addon><strong>COPY</strong></InputGroup.Addon>
                        <FormControl type="text" value={this.props.masterKey} disabled/>
                        <InputGroup.Addon onClick={() => this.props.onGenMasterKey(this.props.appId)}>
                            <strong>GENERATE NEW</strong>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="firstName">Client Key</label>
                    <InputGroup>
                        <InputGroup.Addon><strong>COPY</strong></InputGroup.Addon>
                        <FormControl type="text" value={this.props.clientKey} disabled/>
                        <InputGroup.Addon onClick={() => this.props.onGenClientKey(this.props.appId)}>
                            <strong>GENERATE NEW</strong>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Clearfix/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGenMasterKey: (appId) => {
            dispatch(genMasterKey(appId));
        },
        onGenClientKey: (appId) => {
            dispatch(genClientKey(appId));
        },
    };
};

export default connect(null, mapDispatchToProps)(Keys);
