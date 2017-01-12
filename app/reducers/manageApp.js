/**
 * Created by Darkstar on 1/2/2017.
 */

export default function (state = {}, action) {
    switch (action.type) {
        case 'MANAGE_APP': {
            return {
                ...state,
                viewActive: true,
                appId: action.payload.appId,
                masterKey: action.payload.masterKey,
                name: action.payload.name
            };
        }
        case 'SET_TABLE_FILTER' : {
            return {...state, tableFilter: action.payload};
        }
        case 'TABLE_EDIT' : {
            return {...state, editTableId: action.payload.tableId};
        }
        case 'FETCH_COUNT' : {
            return {...state, rowCount: action.payload.rowCount};
        }
        case 'FETCH_ROWS' : {
            console.log(action.payload.rows);
            return {...state, rows: action.payload.rows};
        }
        case 'ADD_APP' : {
            return {...state, newAppCreated: true};
        }
        case 'ADD_APP_COMPLETE' : {
            return {...state, newAppCreated: false};
        }

        default:
            return state;
    }
}
