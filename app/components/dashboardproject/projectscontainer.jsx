'use strict';

import React from 'react';
import Project from './project.jsx';
import  {manageApp, fetchApps} from '../../actions';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap'

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around'
    }
};

class Projectscontainer extends React.Component {

    componentWillMount() {
        this.props.onLoad();
    }

    render() {

        return (
            <div style={styles.root}>
                <Grid className="projects-container">
                    <Row className="show-grid">
                        {this.props.apps.map(app =>
                            <Col xs={8} sm={6} md={4} lg={4} key={app._id} className="project-grid">
                                <Project key={app._id} {...app}
                                         onProjectClick={this.props.onProjectClick}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onProjectClick: (appId, masterKey, name) => dispatch(manageApp(appId, masterKey, name)),
        onLoad: () => dispatch(fetchApps())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Projectscontainer);
