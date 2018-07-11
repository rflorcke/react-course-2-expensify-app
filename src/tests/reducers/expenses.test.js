import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test("should not remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2]
    ]);
});

test("should add an expense", () => {
    const expense = {
        id: "15",
        description: "Test expense",
        amount: "2500",
        createdAt: moment(0).add(10, "days").valueOf()
    };
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ]);
});

test("should edit an expense by id", () => {
    const id = expenses[0].id;
    const updates = {
        description: "Bubble Gum"
    };
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        {
            ...expenses[0],
            description: updates.description
        },
        expenses[1],
        expenses[2]
    ]);

    // or expect(state[0].description).toBe(updates.description);
});

test("should not edit expense if id not found", () => {
    const id = "8";
    const updates = {
        description: "Bad edit"
    };
    const action = {
        type: "EDIT_EXPENSE",
        id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});