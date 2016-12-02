/**
 * Created by Darkstar on 12/2/2016.
 */

import * as api from '../fakeAPI';
import xhrClient from '../xhrClient';

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function fetchApps() {

    console.log("inside fetchApp action creator");
    return function (dispatch) {
        xhrClient.get("app")
            .then(response => {
                dispatch({
                    type: 'FETCH_APPS',
                    payload: [...response.data]
                });
            })
            .catch(response => {
                console.log("inside fetch Apps error catch");
                return dispatch(authError(response.data.error));
            });

    };
}
