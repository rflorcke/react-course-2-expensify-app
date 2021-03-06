import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
// import "./playground/promises";

const store = configureStore();

// store.dispatch(addExpense({ description: "Water bill", amount: 10050 }));
// store.dispatch(addExpense({ description: "Gas bill", amount: 15000, createdAt: 1000 }));
// store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

// let state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
