/**
 * Created by Darkstar on 12/2/2016.
 */
'use strict';

import React from 'react';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import {grey500} from 'material-ui/styles/colors';

const iconStyles = {
    marginLeft: 5,
    width: 16,
    height: 16,
};

const Projectname = React.createClass({
    render: function () {
        if (this.props.edit == false) {
            return (
                <div className="relative-pos">
                    <p onClick={() => {
                        console.log(this.props.edit);
                    }}>
                        {this.props.name}
                        <EditIcon style={iconStyles} color={grey500}/>
                    </p>
                </div>
            );
        }
        else {
            return (
                <div className="relative-pos">
                    <span>
                        <input ref="input" defaultValue={this.props.name}/>
                        <CloseIcon style={iconStyles} color={grey500} onClick={() => {
                            console.log(this.props.edit);
                        }}/>
                    </span>
                </div>
            );
        }
    }
});

export default Projectname;
