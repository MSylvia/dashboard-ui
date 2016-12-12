'use strict';

import React from 'react';
import Project from './project.jsx';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap'

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
                <Grid className="projects-container">
                    <Row className="show-grid">
                        {this.props.apps.map(app =>
                            <Col sm={12} md={6} lg={4} key={app._id}>
                                <Project key={app._id} {...app} />
                            </Col>
                        )}
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('Inside MapStateToProps for Project container state: ');
    console.log(state);
    if (state == null) {
        return {apps: []}
    }
    return {
        apps: state.apps
    };
};
export default connect(mapStateToProps, actions)(Projectscontainer);
