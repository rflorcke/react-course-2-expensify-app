import moment from "moment";
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from "../../actions/filters";

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});

test("should generate sort-by-date action object", () => {
    expect(sortByDate()).toEqual({
        type: "SORT_BY_DATE",
        sortBy: "date"
    });
});

test("should generate sort-by-amount action object", () => {
    expect(sortByAmount()).toEqual({
        type: "SORT_BY_AMOUNT",
        sortBy: "amount"
    });
});

test("should generate set text filter action object with provided text", () => {
    const text = "Bill";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: text
    });
});

test("should generate set text filter action object with default text", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});