/**
 * Created by Darkstar on 12/2/2016.
 */

import * as api from '../fakeAPI';
import {xhrDashBoardClient, xhrAccountsClient, xhrCBClient} from '../xhrClient';
import {loadState, deleteAllCookies} from '../helper';
import {browserHistory} from 'react-router';

export function fetchApps() {

    console.log('inside fetchApp action creator');
    return function (dispatch) {
        xhrDashBoardClient.get('app')
            .then(response => {
                dispatch({
                    type: 'FETCH_APPS',
                    payload: response.data
                });
            })
            .catch(error => {
                console.log('inside fetch Apps error catch error: ');
                console.log(error);
                /* dispatch({
                 type: 'LOGOUT'
                 }); */
            });

    };
}

export const addApp = (name) => {
    return function (dispatch) {
        xhrDashBoardClient.post('/app/create', {"name": "test"})
            .then(response => {
                console.log(response);
                dispatch({
                    type: 'ADD_APP',
                    payload: response.data
                });
            })
            .catch(error => {
                console.log('inside fetch Apps error catch error: ');
                console.log(error);
            });
    };
};

export const saveAppName = (appId, name) => {

    return function (dispatch) {
        xhrDashBoardClient.put('/app/' + appId, {"name": name})
            .then(response => {
                dispatch({
                    type: 'SAVE_APP_NAME',
                    payload: {
                        appId: appId,
                        name: name
                    }
                });
            })
            .catch(error => {
                console.log('inside saveAppName error catch error: ');
                console.log(error);
            });
    };
};

export const logOut = () => {

    return function (dispatch) {
        xhrAccountsClient.post('/user/logout')
            .then(response => {
                console.log(response);
                localStorage.removeItem('state');
                deleteAllCookies();
                dispatch({
                    type: 'LOGOUT'
                });
            })
            .catch(error => {
                console.log('inside Logout catch error: ');
                console.log(error);
            });
    };
};

export const fetchDevDetails = (IdArray) => {
    console.log("fetchDevDetails");
    console.log(IdArray);
    return function (dispatch) {
        xhrAccountsClient.post('user/list', {IdArray: IdArray})
            .then(response => {
                dispatch({
                    type: 'RECEIVE_USERS',
                    payload: response.data
                });
            })
            .catch(error => {
                console.log('inside fetchDevDetails catch error: ');
                console.log(error);
            });
    };
};

export const sendInvitation = (appId, email) => {
    console.log("inviting:");
    console.log(appId + " " + email);
    return function (dispatch) {
        xhrDashBoardClient.post('/app/' + appId + '/invite', {"email": email})
            .then(response => {
                dispatch({
                    type: 'SAVE_INVITE',
                    payload: {
                        appId: appId,
                        email: email
                    }
                });
            })
            .catch(error => {
                console.log('inside sendInvite error catch error: ');
                console.log(error);
            });
    };
};

export const deleteDev = (appId, userId) => {
    return function (dispatch) {
        xhrDashBoardClient.delete('/app/' + appId + '/removedeveloper/' + userId)
            .then(response => {
                dispatch({
                    type: 'DELETE_DEV',
                    payload: {appId: appId, invited: response.data.developers}
                });
            })
            .catch(error => {
                console.log('inside delete dev error catch error: ');
                console.log(error);
            });
    };
};

export const deleteInvite = (appId, email) => {
    return function (dispatch) {
        xhrDashBoardClient.post('/app/' + appId + '/removeinvitee', {email: email})
            .then(response => {
                dispatch({
                    type: 'DELETE_INVITE',
                    payload: {appId: appId, invited: response.data.invited}
                });
            })
            .catch(error => {
                console.log('inside delete invite error catch error: ');
                console.log(error);
            });
    };
};

export const genMasterKey = (appId) => {
    return function (dispatch) {
        xhrDashBoardClient.get('/app/' + appId + '/change/masterkey')
            .then(response => {
                dispatch({
                    type: 'GEN_MASTER',
                    payload: {appId: appId, masterKey: response.data}
                });
            })
            .catch(error => {
                console.log('inside genMasterKey action error catch error: ');
                console.log(error);
            });
    };
};

export const genClientKey = (appId) => {
    return function (dispatch) {
        xhrDashBoardClient.get('/app/' + appId + '/change/clientkey')
            .then(response => {
                dispatch({
                    type: 'GEN_CLIENT',
                    payload: {appId: appId, clientKey: response.data}
                });
            })
            .catch(error => {
                console.log('inside genClientKey action error catch error: ');
                console.log(error);
            });
    };
};

export const deleteApp = (appId) => {
    return function (dispatch) {
        xhrDashBoardClient.delete('/app/' + appId)
            .then(response => {
                dispatch({
                    type: 'DELETE_APP',
                    payload: {appId: appId}
                });
            })
            .catch(error => {
                console.log('inside delete app error catch error: ');
                console.log(error);
            });
    };
};

export const manageApp = (appId, masterKey, name) => {
    return function (dispatch) {
        dispatch({
            type: 'MANAGE_APP',
            payload: {appId: appId, masterKey: masterKey, name: name}
        });
        browserHistory.push('/tables');
    };
};

export function fetchTables(appId, masterKey) {

    console.log('inside fetchTables action creator');
    console.log(masterKey);
    return function (dispatch) {
        xhrCBClient.post('/app/' + appId + '/_getAll', {key: masterKey})
            .then(response => {
                console.log(response);
                if (response.data)
                    dispatch({
                        type: 'FETCH_TABLES',
                        payload: {appId: appId, tables: response.data}
                    });
            })
            .catch(error => {
                console.log('inside fetch Tables error catch error: ');
                console.log(error);
            });

    };
}

export function createTable(appId, masterKey, tableName) {
    return function (dispatch) {
        xhrCBClient
            .put(
                '/app/' + appId + '/' + tableName,
                {
                    key: masterKey,
                    "data": {
                        "name": tableName,
                        "appId": appId,
                        "_type": "table",
                        "type": "custom",
                        "maxCount": 9999,
                        "columns": [{
                            "name": "id",
                            "_type": "column",
                            "dataType": "Id",
                            "required": true,
                            "unique": true,
                            "relatedTo": null,
                            "relationType": null,
                            "isDeletable": false,
                            "isEditable": false,
                            "isRenamable": false,
                            "editableByMasterKey": false
                        }, {
                            "name": "expires",
                            "_type": "column",
                            "dataType": "DateTime",
                            "required": false,
                            "unique": false,
                            "relatedTo": null,
                            "relationType": null,
                            "isDeletable": false,
                            "isEditable": false,
                            "isRenamable": false,
                            "editableByMasterKey": false
                        }, {
                            "name": "updatedAt",
                            "_type": "column",
                            "dataType": "DateTime",
                            "required": true,
                            "unique": false,
                            "relatedTo": null,
                            "relationType": null,
                            "isDeletable": false,
                            "isEditable": false,
                            "isRenamable": false,
                            "editableByMasterKey": false
                        }, {
                            "name": "createdAt",
                            "_type": "column",
                            "dataType": "DateTime",
                            "required": true,
                            "unique": false,
                            "relatedTo": null,
                            "relationType": null,
                            "isDeletable": false,
                            "isEditable": false,
                            "isRenamable": false,
                            "editableByMasterKey": false
                        }, {
                            "name": "ACL",
                            "_type": "column",
                            "dataType": "ACL",
                            "required": true,
                            "unique": false,
                            "relatedTo": null,
                            "relationType": null,
                            "isDeletable": false,
                            "isEditable": false,
                            "isRenamable": false,
                            "editableByMasterKey": false
                        }]
                    }
                }
            )
            .then(response => {
                if (response.data)
                    dispatch({
                        type: 'ADD_TABLE',
                        payload: {appId: appId, newTable: response.data}
                    });
            })
            .catch(error => {
                console.log('inside add table error catch error: ');
                console.log(error);
            });

    };
}

export function deleteTable(appId, masterKey, tableName) {
    console.log("inside delete table action creator");
    return function (dispatch) {
        xhrCBClient
            .put(
                '/app/' + appId + '/' + tableName,
                {
                    key: masterKey,
                    method: "DELETE",
                    name: tableName
                }
            )
            .then(response => {
                if (response.data)
                    dispatch({
                        type: 'DELETE_TABLE',
                        payload: {appId: appId, name: tableName}
                    });
            })
            .catch(error => {
                console.log('inside delete table error catch error: ');
                console.log(error);
            });

    };
}

export const setTableSearchFilter = (filter) => {
    return function (dispatch) {
        dispatch({
            type: 'SET_TABLE_FILTER',
            payload: filter
        });
    };
};

