import {createStore} from 'redux';

const initialState = {
    user: {
        username: "Thiru",
        balance: 25000
    }
}

//Action
export const addMoney = (amt) => ({
    type: "addMoney",
    payload: amt,
});

export const removeMoney = (amt) => ({
    type: "removeMoney",
    payload: amt,
});

//Reduce

function reduce(state = initialState, action) {
    switch(action.type) {
        case "addMoney": return {
            user: {
                username: state.user.username,
                balance: state.user.balance + action.payload
            }
        };

        case "removeMoney": return {
            user: {
                username: state.user.username,
                balance: state.user.balance - action.payload
            }
        };

        default:
            return state
    }
}

const store = createStore(reduce)
export default store;