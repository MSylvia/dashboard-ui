/**
 * Created by Darkstar on 12/2/2016.
 */
'use strict';


import {saveAppName} from '../../actions';
import {connect} from 'react-redux';
import React from 'react';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {grey500} from 'material-ui/styles/colors';

const iconStyles = {
    marginLeft: 5,
    width: 16,
    height: 16,
};

class ProjectName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            value: this.props.name
        };
    }

    editName = () => this.setState({editMode: true});
    closeEditing = () => this.setState({editMode: false});
    handleChange = (e) => this.setState({value: e.target.value});

    render() {
        if (this.state.editMode === false) {
            console.log(this.state.editMode);
            return (
                <div className="relative-pos">
                    <p>
                        {this.props.name}
                        <EditIcon style={iconStyles} color={grey500} onClick={this.editName}/>
                    </p>
                </div>
            );
        }
        else {
            return (
                <div className="relative-pos">
                    <p>
                        <input ref="input" defaultValue={this.props.name} onChange={this.handleChange}/>
                        <CloseIcon style={iconStyles} color={grey500} onClick={() => {
                            this.closeEditing();
                            this.props.onNameChange(this.props.id, this.state.value);
                        }}/>
                    </p>
                </div>
            );
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onNameChange: (id, newName) => {
            dispatch(saveAppName(id, newName));
        },
    };
};

export default connect(null, mapDispatchToProps)(ProjectName);
