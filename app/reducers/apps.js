/**
 * Created by Darkstar on 12/2/2016.
 */
function doesExists(_id, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i]._id === _id) {
            return true;
        }
    }
    return false;
}

const app = (state, action) => {
    switch (action.type) {
        case 'SAVE_APP_NAME':
            if (state.appId !== action.payload.appId) {
                return state;
            }
            return {...state, name: action.payload.name};
        case 'SAVE_INVITE':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, invited: [...state.invited, action.payload]};
        case 'DELETE_DEV':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, developers: action.payload.developers};
        case 'DELETE_INVITE':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, invited: action.payload.invited};
        default:
            return state;
    }
};

export default function (state = [], action) {
    switch (action.type) {
        case 'FETCH_APPS': {
            console.log('Inside fetch apps reducer');
            console.log([...state, ...action.payload]);
            let newApps = action.payload.filter((app) => {
                return !doesExists(app._id, state);
            });
            return [...state, ...newApps];
        }

        case 'ADD_APP': {
            return [...state, action.payload];
        }
        case 'SAVE_APP_NAME': {
            return state.map(t => app(t, action));
        }
        case 'SAVE_INVITE': {
            return state.map(t => app(t, action));
        }
        case 'DELETE_DEV': {
            return state.map(t => app(t, action));
        }
        case 'DELETE_INVITE': {
            return state.map(t => app(t, action));
        }
        case  'LOGOUT':
            return [];
        default:
            return state;
    }
}
