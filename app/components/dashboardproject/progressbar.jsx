'use strict';

import React from 'react';

const Progressbar = React.createClass({
    getInitialState: function() {
        return {
            apiused: 5,
            apibar: {width: '5%'},
            storageused: 0,
            storagebar: {width: '0%'}
        }
    },
    render: function() {
        return (
            <div className="progress_bar">
                <p>API Calls {this.state.apiused}% used of 10,000</p>
                <div className="apihead">
                    <div className="api_bar" style={this.state.apibar}></div>
                </div>
                <p>Storage {this.state.storageused}% used of 200MB</p>
                <div className="storagehead">
                    <div className="storage_bar" style={this.state.storagebar}></div>
                </div>
            </div>
        );
    }
});

export default Progressbar;