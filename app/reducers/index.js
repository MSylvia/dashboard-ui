import {combineReducers} from 'redux';
import apps from './apps';
import user from './user';
import userList from './userList';
import manageApp from './manageApp';
import analytics from './analytics';
import {reducer as formReducer} from 'redux-form';

const todoApp = combineReducers({
    apps,
    user,
    userList,
    manageApp,
    analytics,
    form: formReducer
});

export default todoApp;
