/**
 * Created by Darkstar on 12/5/2016.
 */
export default function (state = {}, action) {
    switch (action.type) {
        case  'LOGOUT':
            console.log('Inside Logout reducer');
            console.log({...state, isLogggedIn: false});
            return {isLogggedIn: false};

        default:
            return state;
    }
}
