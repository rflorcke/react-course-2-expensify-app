import { createStore } from "redux";

// Destructure in function arg
const add = ({ a, b }, c) => {
    return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100));

// Action generators

// const incrementCount = (payload = {}) => ({
//     type: "INCREMENT",
//     incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ count }) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET",
});


// Reducers
// 1. Reducers are pure functions (i.e. don't use or change anything outside the function scope)

                // pure function
                const add1 = (a, b) => {
                    return a + b;
                };

                // not a pure function
                let result;
                const add2 = (a, b) => {
                    result = a + b;
                };

                // not a pure function
                let a = 10;
                const add3 = (b) => {
                    return a + b;
                };

// 2. Never change state or action. Just return a new state.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count
            };
        default:
            return state;
    }
}

// Store

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

// store.dispatch({
//     type: "INCREMENT"
// });

// WHEN CALLING "store.dispatch()", the arg passed to dispatch is 
// an object representing the "action" argument in either "createStore()"
// or in the reducer (reducerFunction = (state, action) => {})

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//     type: "RESET"
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 10
// });

// store.dispatch({
//     type: "DECREMENT"
// });

// store.dispatch({
//     type: "SET",
//     count: 101
// });

store.dispatch(resetCount());

store.dispatch(setCount({ count: 100 }));
store.dispatch(setCount({ count: 300 }));


unsubscribe();
