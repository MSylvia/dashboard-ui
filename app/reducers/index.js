import {combineReducers} from 'redux';
import apps from './apps';
import user from './user';
import userList from './userList';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
    apps,
    user,
    userList,
    form: formReducer
});

export default todoApp;
