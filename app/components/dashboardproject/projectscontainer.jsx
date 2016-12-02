'use strict';

import React from 'react';
import {GridList} from 'material-ui/GridList';
import Project from './project.jsx';

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
                <GridList cellHeight="auto"
                          cols={ (( (typeof window != 'undefined' ) ? window.innerWidth : 1500) * 0.8) / 360 }
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
