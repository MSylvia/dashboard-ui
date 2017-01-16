/**
 * Created by Darkstar on 1/12/2017.
 */

export default function (state = [], action) {
    switch (action.type) {
        case 'RECEIVE_ANALYTICS' : {
            return action.payload;
        }

        default:
            return state;
    }
}
