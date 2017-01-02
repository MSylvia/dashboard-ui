/**
 * Created by Darkstar on 1/2/2017.
 */

export default function (state = {}, action) {
    switch (action.type) {
        case 'MANAGE_APP': {
            console.log("inside Manage App reducer");
            return {viewActive: true, appId: action.payload.appId};
        }
        default:
            return state;
    }
}
