/**
 * Created by Darkstar on 12/4/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {Table} from 'react-bootstrap';
import Close from 'material-ui/svg-icons/navigation/close';
import {grey500} from 'material-ui/styles/colors';
import {sendInvitation, fetchDevDetails, deleteDev, deleteInvite} from '../../actions/index';
import {FormGroup, InputGroup, FormControl, Button, Clearfix} from 'react-bootstrap';

const iconStyles = {
    marginLeft: 20,
};
const getAppDevs = (state, id) => {
    console.log("getAppDevs " + id);
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

    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    render() {
        console.log("inside useraccess props.invited:");
        console.log(this.props.invited);

        const handleChange = (e) => this.setState({email: e.target.value});
        const onSend = () => {
            this.setState({email: ""});
            return this.props.invite(this.props.appId, this.state.email);
        };

        return (
            <div className="tab-content">
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>@</InputGroup.Addon>
                        <FormControl type="text" placeholder="example@example.com" value={this.state.email}
                                     onChange={handleChange}/>
                    </InputGroup>
                    <Button bsStyle="primary"
                            onClick={onSend}>Invite</Button>
                </FormGroup>
                <Clearfix/>
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
                            <td>
                                <Close style={iconStyles}
                                       color={grey500}
                                       onClick={() => this.props.onDeleteDev(this.props.appId, user._id)}/>
                            </td>
                        </tr>)
                    }
                    { this.props.invited.map((user) =>
                        <tr key={user.email}>
                            <td>{user.email}</td>
                            <td>--</td>
                            <td>Invited</td>
                            <td><Close style={iconStyles} color={grey500}
                                       onClick={() => this.props.onDeleteInvite(this.props.appId, user.email)}/></td>
                        </tr>)
                    }
                    </tbody>
                </Table >
            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        invite: (appId, email) => dispatch(sendInvitation(appId, email)),
        fetchDevDetails: (IdArray) => dispatch(fetchDevDetails(IdArray)),
        onDeleteDev: (appId, userId) => dispatch(deleteDev(appId, userId)),
        onDeleteInvite: (appId, email) => dispatch(deleteInvite(appId, email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAccess);
