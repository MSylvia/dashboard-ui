import {combineReducers} from 'redux';
import apps from './apps';
import user from './user';

const todoApp = combineReducers({
    apps,
    user,
});

export default todoApp;
