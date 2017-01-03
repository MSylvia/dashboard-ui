/**
 * Created by Darkstar on 11/30/2016.
 */
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Toolbar from './toolbar/toolbar.js';
import Footer from './footer/footer.jsx';
import Dashboardproject from './dashboardproject/dashboardproject.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TableList from './manageapps/tables/tableList';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//todo: useragent is hardcoded temporariy, user routerContext to get instead or state props
const muiTheme = getMuiTheme({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36',
});

const App = ({showOthers}) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <Toolbar />
            { showOthers ? <TableList /> : <Dashboardproject id="app-dashproject" className="app-dashproject"/>}
            <Footer id="app-footer"/>
        </div>
    </MuiThemeProvider>
);

const mapStateToProps = (state) => {    return {showOthers: state.manageApp.viewActive}; };

export default connect(mapStateToProps)(App);
