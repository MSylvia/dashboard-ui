'use strict';

import React from 'react';
import  {fetchTables, deleteTable, editTableNavigate} from '../../../actions';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import PowerOn from 'material-ui/svg-icons/action/power-settings-new';
import TableIcon from 'material-ui/svg-icons/device/storage';
import {grey500, grey50} from 'material-ui/styles/colors';
import IconDelete from 'material-ui/svg-icons/action/delete';
import RoleIcon from 'material-ui/svg-icons/hardware/security';
import UserIcon from 'material-ui/svg-icons/social/people';
import DeviceIcon from 'material-ui/svg-icons/hardware/smartphone';

const iconStyles = {
    marginTop: 14,
    marginRight: 12,
    marginLeft: 12,
    height: 40,
    width: 40
};
const iconStyles2 = {
    marginTop: 10,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 5,
    height: 25,
    width: 25
};
const iconStyles3 = {
    marginTop: 33,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 5,
    height: 25,
    width: 25
};

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    }
};

class TableContainer extends React.Component {

    componentWillMount() {
        this.props.onLoad(this.props.activeAppId, this.props.masterKey);
    }

    getIcon(tableType) {
        switch (tableType) {
            case 'role':
                return <RoleIcon style={iconStyles} color={grey500}/>;
            case 'user':
                return <UserIcon style={iconStyles} color={grey500}/>;
            case 'device':
                return <DeviceIcon style={iconStyles} color={grey500}/>;
            default:
                return <TableIcon style={iconStyles} color={grey500}/>;
        }
    }

    render() {
        return (
            <div style={styles.root}>
                <Grid className="tables-container">
                    <Row className="show-grid">
                        {
                            this.props.tables.map((table) => (
                                <Col sm={12} md={6} lg={4} key={table.id}>
                                    <div className="table">
                                        { this.getIcon(table.type)}
                                        <p>{table.name}</p>
                                        {
                                            (table.type !== 'custom') ?
                                                (<div className="overlay">
                                                    <PowerOn style={iconStyles3} color={grey50}
                                                             onClick={() => this.props.onEditTable(table.id)}/>
                                                </div>)
                                                :
                                                (<div className="overlay">
                                                    <PowerOn style={iconStyles2} color={grey50}
                                                             onClick={() => this.props.onEditTable(table.id)}/>
                                                    <div className="bordertop"></div>
                                                    <IconDelete style={iconStyles2}
                                                                color={grey50}
                                                                onClick={
                                                                    () => this.props.deleteTable(
                                                                        this.props.activeAppId,
                                                                        this.props.masterKey,
                                                                        table.name)
                                                                }
                                                    />
                                                </div>)
                                        }
                                    </div>
                                </Col>))
                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let tables = state.apps.filter(app => (app.appId === state.manageApp.appId))[0].tables;
    return {
        activeAppId: state.manageApp.appId,
        masterKey: state.manageApp.masterKey,
        tables: tables ? tables.filter(t => t.name.toLowerCase().search(state.manageApp.tableFilter ? state.manageApp.tableFilter : '') >= 0) : []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (appId, masterKey) => dispatch(fetchTables(appId, masterKey)),
        deleteTable: (activeAppId, masterKey, name) => dispatch(deleteTable(activeAppId, masterKey, name)),
        onEditTable: (tableId) => dispatch(editTableNavigate(tableId))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
