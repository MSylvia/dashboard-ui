/**
 * Created by Darkstar on 12/2/2016.
 */


export default function (state = [], action) {
    switch (action.type) {
        case  "FETCH_APPS":
            console.log("Inside fetch apps reducer")
            console.log([...state, ...action.payload]);
            return [...state, ...action.payload];
    }
    return state;
}
