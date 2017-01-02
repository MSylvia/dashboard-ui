/**
 * Created by Darkstar on 12/2/2016.
 */

import * as api from '../fakeAPI';
import {xhrDashBoardClient, xhrAccountsClient} from '../xhrClient';
import {loadState, deleteAllCookies} from '../helper';

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

export const manageApp = (appId) => {
    return function (dispatch) {
        dispatch({
            type: 'MANAGE_APP',
            payload: {appId: appId}
        });
    };
};
