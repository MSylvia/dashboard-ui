/**
 * Created by Darkstar on 12/4/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Table} from 'react-bootstrap';
import Close from 'material-ui/svg-icons/navigation/close';
import {grey500} from 'material-ui/styles/colors';
import * as actions from '../../actions/index';

const iconStyles = {
    marginLeft: 20,
};
const getAppDevs = (state, id) => {
    for (let i = 0; i < state.apps.length; i++) {
        if (state.apps[i]._id === id) {
            return state.apps[i].developers.map((dev) => dev.userId);
        }
    }
};

class UserAccess extends Component {

    componentWillMount() {
        if (this.props.newIds.length > 0)
            this.props.fetchDevDetails(this.props.newIds);
    }

    render() {
        console.log("inside useraccess:");
        console.log(this.props.objUserList);
        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                { this.props.objUserList.map((user) =>
                    <tr key={user._id}>
                        <td>{user.email}</td>
                        <td>{user.isAdmin ? "Admin" : "User"}</td>
                        <td>Accepted</td>
                        <td><Close style={iconStyles} color={grey500}/></td>
                    </tr>)
                }
                </tbody>
            </Table >
        );
    }
}

const mapStateToProps = (state, selfProps) => {
    let IdArray = getAppDevs(state, selfProps.id);
    let newIds = IdArray.filter((id) => (typeof state.userList[id] === 'undefined'));
    let oldIds = IdArray.filter((id) => (typeof state.userList[id] !== 'undefined'));
    let objUserList = oldIds.map((id) => state.userList[id]);
    return {
        objUserList: objUserList,
        newIds: newIds
    };
};

export default connect(mapStateToProps, actions)(UserAccess);
