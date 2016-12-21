/**
 * Created by Darkstar on 12/2/2016.
 */

import * as api from '../fakeAPI';
import {xhrDashBoardClient, xhrAccountsClient} from '../xhrClient';
import {loadState, deleteAllCookies} from '../helper';
import {v4} from 'node-uuid';

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
                dispatch({
                    type: 'LOGOUT'
                });
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
                dispatch({
                    type: 'LOGOUT'
                });
            });
    };
};

export const saveAppName = (id, name) => {
    return {
        type: 'SAVE_APP_NAME',
        payload: {
            _id: id,
            name: name
        }
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
