'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './components/toolbar/toolbar.js';
import Footer from './components/footer/footer.jsx';
import Dashboardproject from './components/dashboardproject/dashboardproject.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <div>
            <Toolbar />
            <Dashboardproject id="app-dashproject" className="app-dashproject"/>
            <Footer id="app-footer"/>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.querySelector('.app')
);

