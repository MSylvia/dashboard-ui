/**
 * Created by Darkstar on 1/8/2017.
 */
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {grey500} from 'material-ui/styles/colors';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import {Table} from 'react-bootstrap';
import  {fetchCount} from '../../../actions';

class TableEdit extends React.Component {

    componentWillMount() {
        console.log(this.props.table.id);
        this.props.loadCount(this.props.activeAppId, this.props.table.name, this.props.masterKey);
    }

    mapRowtoTD(row) {
        let rowNo = 0; // for setting key of columns that doesn't exist for that particular tuple and hence is not returned from server in row object
        return this.props.table.columns.map((col) => {
            if (row.hasOwnProperty(col.name)) {
                return <td key={col.name}>
                    { (typeof row[col.name] === 'string') ? row[col.name] : "-" }
                </td>;
            } else {
                return <td key={rowNo++}>
                    { (typeof row[col.name] === 'string') ? row[col.name] : "-" }
                </td>;
            }
        });
    }

    render() {

        let rowNo = 0; // for setting key for defined columns for table that are not  returned as columns in table rows.
        let rows = [];
        if (this.props.rows.length > 0) {
            rows = this.props.rows.map((row) => (
                <tr key={ row._id }>
                    { this.mapRowtoTD(row) }
                </tr>
            ));
        }

        return (
            <Table>
                <tbody>
                <tr>
                    <td style={{height: 32}}>
                        <div className="sidebar">
                            <div className="title"
                                 style={{borderRight: 0, borderLeft: 0, bordertop: 0}}>
                                <div>
                                    <Refresh style={{
                                        width: 21,
                                        height: 21,
                                        verticalAlign: "middle"
                                    }} color={grey500}/>
                                    <span className="t">Refresh</span>
                                </div>
                            </div>
                        </div>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div id="centre" className="scroll-outer">
                            <Table id="appTable">
                                <thead>
                                <tr>
                                    { this.props.table.columns.map(
                                        (col) => (
                                            <td key={col.name ? col.name : rowNo++}> {col.name}</td>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                { rows }
                                </tbody>
                            </Table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    let tables = state.apps.filter(app => (app.appId === state.manageApp.appId))[0].tables;
    let table = tables.filter(table => (table.id === state.manageApp.editTableId ))[0];

    console.log((typeof state.manageApp.rows !== 'undefined') ? state.manageApp.rows : []);

    return {
        activeAppId: state.manageApp.appId,
        masterKey: state.manageApp.masterKey,
        table: table,
        rows: (typeof state.manageApp.rows !== 'undefined') ? state.manageApp.rows : []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadCount: (appId, tableName, masterKey) => dispatch(fetchCount(appId, tableName, masterKey))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableEdit);
