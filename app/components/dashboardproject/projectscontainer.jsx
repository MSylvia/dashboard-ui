'use strict';

import React from 'react';
import {GridList} from 'material-ui/GridList';
import Project from './project.jsx';
const xhrClient = require('../../xhrClient');

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    }
};

class Projectscontainer extends React.Component {
    render() {
        return (
            <div style={styles.root}>
                <GridList cellHeight="auto" cols={ /*((window? window.innerWidth:1000) * 0.8)/360 */ 3 }
                          style={styles.gridList} className="projects-container">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </GridList>
            </div>
        );
    }
}

export default Projectscontainer;
