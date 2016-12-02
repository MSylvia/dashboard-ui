/**
 * Created by Darkstar on 12/2/2016.
 */
const byId = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_APPS': // eslint-disable-line no-case-declarations
            const nextState = { ...state };
            action.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        default:
            return state;
    }
};

export default byId;

export const getTodo = (state, id) => state[id];
