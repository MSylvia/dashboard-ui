'use strict';
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Project from './project.jsx';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    },
};

const Projectscontainer = () => (
    <div style={styles.root}>
        <GridList cellHeight="auto" cols={ (window.innerWidth * 0.8)/360 } style={styles.gridList} className="projects-container">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </GridList>
    </div>
);

export default Projectscontainer;
