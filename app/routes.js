/**
 * Created by Darkstar on 11/30/2016.
 */
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const browserHistory = ReactRouter.browserHistory;
import routesConfig from './routesConfig';

class Routes extends React.Component {
    render() {
        return <Router history={browserHistory} routes={routesConfig}/>;
    }
}

export default Routes;