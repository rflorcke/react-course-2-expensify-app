import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export class ExpensesSummary extends React.Component {
    renderMessage() {
        if (this.props.numExpenses > 0) {
            const { countExpenses: count, totalAmount } = this.props;
            const total = numeral(totalAmount / 100).format("$0,0.00");
            const msg = `Viewing ${count} ${count === 1 ? "expense" : "expenses"} totalling ${total}`;
            return (
                <h2>{msg}</h2>
            );
        }
        return null;
    }
    render() {
        return (
            <div>{this.renderMessage()}</div>
        );
    }
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        countExpenses: visibleExpenses.length,
        totalAmount: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);