/**
 * Created by Darkstar on 11/30/2016.
 */
"use strict";

const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
import routesConfig from './routesConfig';
const AsyncProps = require('async-props').default;

class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}
                       routes={routesConfig}
                       render={(props) => <AsyncProps {...props}/>}
        />
    }
}

export default Routes;
