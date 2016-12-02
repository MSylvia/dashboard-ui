'use strict';

import React from 'react';
import {GridList} from 'material-ui/GridList';
import Project from './project.jsx';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    }
};

class Projectscontainer extends React.Component {

    componentWillMount() {
        this.props.fetchApps();
    }

    render() {
        console.log("Inside project container, state :");
        console.log(this.props);
        return (
            <div style={styles.root}>
                <GridList cellHeight="auto"
                          cols={ (( (typeof window != 'undefined' ) ? window.innerWidth : 1500) * 0.8) / 360 }
                          style={styles.gridList} className="projects-container">

                    {this.props.apps.map(app=>
                        <Project key={app._id} {...app} />
                    )}
                </GridList>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state == null) {
        return {apps: []}
    }
    return {
        apps: state
    };
};
export default connect(mapStateToProps, actions)(Projectscontainer);
