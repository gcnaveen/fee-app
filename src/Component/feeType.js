import React from "react";
import data from "../jsonData.json";
import DropDown from "./DropDown";
import Nationality from "./Nationality";

function FeeType(props) {
  const [fee, setFee] = React.useState();
  const toggle = (e) => {
    setFee(e);
  };
  let render = fee ? (
    <Nationality feesType={fee} />
  ) : (
    <>
      <h1>Fee Types </h1>
      <DropDown onSubmit={toggle.bind(this)} item={Object.keys(data)} />
    </>
  );

  return <div>{render}</div>;
}

export default FeeType;
