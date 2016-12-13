/**
 * Created by Darkstar on 12/13/2016.
 */
export default function (state = {}, action) {
    switch (action.type) {
        case 'RECEIVE_USERS': {
            console.log('Inside RECEIVE_USERS reducer');
            let userObj = {};
            for (let i = 0; i < action.payload.length; i++) {
                userObj[action.payload[i]._id] = action.payload[i];
            }
            return {...state, ...userObj};
        }

        default:
            return state;
    }
}
