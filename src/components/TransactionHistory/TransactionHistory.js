import React from "react";
import PropTypes from "prop-types";
import s from "./Transaction.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table class={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.bool.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
