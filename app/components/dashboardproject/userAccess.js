/**
 * Created by Darkstar on 12/4/2016.
 */
import React from 'react';
import  {Table} from 'react-bootstrap';
import Close from 'material-ui/svg-icons/navigation/close';
import {grey500} from 'material-ui/styles/colors';

const iconStyles = {
    marginLeft: 20,
};

const UserAcess = () => (
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
        <tr>
            <td>jignesh2481991@gmail.com</td>
            <td>Admin</td>
            <td>Accepted</td>
            <td><Close style={iconStyles} color={grey500}/></td>
        </tr>
        </tbody>
    </Table>
);

export default UserAcess;
