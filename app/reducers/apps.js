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
        case 'GEN_MASTER':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, keys: {...state.keys, master: action.payload.masterKey}};
        case 'GEN_CLIENT':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, keys: {...state.keys, js: action.payload.clientKey}};
        case 'FETCH_TABLES':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, tables: [...action.payload.tables]};
        case 'ADD_TABLE':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, tables: [...state.tables, action.payload.newTable]};
        case 'DELETE_TABLE':
            if (state.appId !== action.payload.appId)
                return state;
            return {...state, tables: state.tables.filter((table) => table.name !== action.payload.name)};
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
        case 'GEN_MASTER': {
            return state.map(t => app(t, action));
        }
        case 'GEN_CLIENT': {
            return state.map(t => app(t, action));
        }
        case 'DELETE_APP': {
            return state.filter(t => t.appId !== action.payload.appId);
        }
        case  'LOGOUT':
            return [];
        case 'FETCH_TABLES': {
            return state.map(t => app(t, action));
        }
        case 'ADD_TABLE': {
            return state.map(t => app(t, action));
        }
        case 'DELETE_TABLE': {
            return state.map(t => app(t, action));
        }
        default:
            return state;
    }
}
