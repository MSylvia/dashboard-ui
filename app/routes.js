/**
 * Created by Darkstar on 11/30/2016.
 */
"use strict";

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import routesConfig from './routesConfig';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class Routes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routesConfig}  />
            </Provider>)
    }
}

export default Routes;
