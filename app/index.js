'use strict';

import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Dashboardproject from './components/dashboardproject/dashboardproject.jsx';


render( < Navbar /> , document.getElementById('app-navbar'));
render( < Footer /> , document.getElementById('app-footer'));
render( < Dashboardproject /> , document.getElementById('app-dashproject'));