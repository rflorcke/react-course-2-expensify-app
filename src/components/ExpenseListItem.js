import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        <h2>${amount / 100}</h2>
        <p>Created at: {createdAt}</p>
    </div>
);

export default ExpenseListItem;