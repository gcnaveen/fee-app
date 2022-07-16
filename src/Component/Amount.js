import React from "react";
import "./style.css";

function Amount(props) {
  return (
    <div className="amountStyle">
      <div className="messageContainer">
        <label>Note: </label>
        <span className="messageStyle">{props.message}</span>
      </div>
      <div>
        <table>
          <tr>
            <th>Fees Type</th>
            <th>Nation</th>
            <th>Course</th>
            <th>Level</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>{props?.feesType}</td>
            <td>{props?.nation}</td>
            <td>{props?.course}</td>
            <td>{props?.level}</td>
            <td>{props.amount}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Amount;
