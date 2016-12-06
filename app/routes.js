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

import routesConfig from './routesConfig';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

let persistedState = loadState();
if (persistedState == undefined) {
    console.log('persistedState not set');
    persistedState = {
        user: {
            isLogggedIn: getCookie('userId') !== null,
            fullName: getCookie('userFullname'),
            userId: getCookie('userId'),
            email: getCookie('email'),
        }
    };
}

const store = createStoreWithMiddleware(reducers, persistedState);

store.subscribe(throttle(() => {
    saveState(store.getState())
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
