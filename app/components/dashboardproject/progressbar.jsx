'use strict';
import React from 'react';
import {connect} from 'react-redux';
import plans from '../../fakeAPI/plans'

const Progressbar = (props) => (
    <div className="progress_bar">
        <p>API Calls {props.apiUsed}% used of {props.maxAPI}</p>
        <div className="apihead">
            <div className="api_bar" style={{width: props.apiUsed+'%'}}></div>
        </div>
        <p>Storage {props.storageUsed}% used of 200MB</p>
        <div className="storagehead">
            <div className="storage_bar" style={{width: props.storageUsed+'%'}}></div>
        </div>
    </div>);

const mapStateToProps = (state, selfProps) => {

    let apiUsed = state.analytics.api ? state.analytics.api.filter((app) => (app.appId === selfProps.appId))[0].monthlyApiCount : 0;
    let storageUsed = state.analytics.storage ? state.analytics.storage.filter((app) => (app.appId === selfProps.appId))[0].size : 0;
    let maxAPI = plans.plans[selfProps.planId - 1].apiCalls;
    let maxStorage = plans.plans[selfProps.planId - 1].storage + plans.plans[selfProps.planId].storageUnit;
    let numMaxAPI = plans.plans[selfProps.planId - 1].numApiCalls;
    let numMaxStorage = plans.plans[selfProps.planId - 1].numStorage;

    return {
        apiUsed: Math.ceil(apiUsed ? (apiUsed / numMaxAPI) * 100 : 0),
        storageUsed: Math.ceil(storageUsed ? (storageUsed / numMaxStorage) / 100 : 0),
        maxAPI,
        maxStorage
    }
};

export default connect(mapStateToProps, null)(Progressbar);
