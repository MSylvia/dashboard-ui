/**
 * Created by Darkstar on 11/30/2016.
 */
'use strict';

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import {getCookie, saveState, loadState} from './helper';
import throttle from 'lodash/throttle';
import {accountsURL} from './config';

import routesConfig from './routesConfig';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
let persistedState = loadState();
console.log(process.env);
if (typeof persistedState === 'undefined') {
    persistedState = {
        user: {
            isLogggedIn: getCookie('userId') !== null,
            fullName: getCookie('userFullname'),
            userId: getCookie('userId'),
            email: getCookie('email'),
        }
    };
    if (persistedState.user.isLogggedIn === false) {
        localStorage.removeItem('state');
        window.location = accountsURL;
    }
}

const store = createStoreWithMiddleware(reducers, persistedState);

store.subscribe(throttle(() => {
    let state = store.getState();
    if (state.user.isLogggedIn === false) {
        window.location = accountsURL;
    }
    //else
    //    saveState(store.getState());
}, 1000));

class Routes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routesConfig}/>
            </Provider>);
    }
}

export default Routes;
