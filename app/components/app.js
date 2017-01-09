/**
 * Created by Darkstar on 11/30/2016.
 */
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Toolbar from './toolbar/toolbar.js';
import Footer from './footer/footer.jsx';
import Dashboardproject from './dashboardproject/dashboardproject.jsx';

const App = ({showOthers}) => (
    <div>
        <Toolbar />
        <Dashboardproject id="app-dashproject" className="app-dashproject"/>
        <Footer id="app-footer"/>
    </div>
);

const mapStateToProps = (state) => {
    return {showOthers: state.manageApp.viewActive};
};

export default connect(mapStateToProps)(App);
