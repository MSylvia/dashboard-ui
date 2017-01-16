/**
 * Created by Darkstar on 12/4/2016.
 */
import React from 'react';
import UserAccess from './userAccess';
import Upgrade from './upgrade';
import Keys from './keys';
import DeleteApp from './deleteApp';
import {Tab, Nav, NavItem} from 'react-bootstrap';

const OptionsModal = (props) => {

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            { (props.selectedTab === 'addDev') ?
                <UserAccess id={props.id} appId={props.appId} invited={props.invited}/> : <div></div>
            }
            { (props.selectedTab === 'keys') ?
                <Keys id={props.id}
                      appId={props.appId}
                      clientKey={props.clientKey}
                      masterKey={props.masterKey}
                /> : <div></div>
            }
            { (props.selectedTab === 'upgrade') ?
                <Upgrade onSubmit={handleSubmit} planId={props.planId} id={props.id} appId={props.appId}/> : <div></div>
            }
            {  (props.selectedTab === 'delete') ?
                <DeleteApp appId={props.appId}/> : <div></div>
            }
        </div>
    );
};

export default OptionsModal;
