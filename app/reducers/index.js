import {combineReducers} from 'redux';
import apps from './apps';
import user from './user';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
    apps,
    user,
    form: formReducer
});

export default todoApp;
