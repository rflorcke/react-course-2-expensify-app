import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary countExpenses={1} totalAmount={235} />);
    expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpensesSummary with multiple expense", () => {
    const wrapper = shallow(<ExpensesSummary countExpenses={5} totalAmount={503500} />);
    expect(wrapper).toMatchSnapshot();
});