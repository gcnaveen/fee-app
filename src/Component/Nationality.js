import React from "react";
import DropDown from "./DropDown";
import jsonData from "../jsonData.json";
import Courses from "./Courses";

const Nationality = (props) => {
  const [nation, setNation] = React.useState();

  const nationality = (e) => {
    setNation(e);
  };
  let items = null;
  Object.keys(jsonData).forEach((item, index) => {
    if (props?.feesType === item) {
      items = (
        <DropDown onSubmit={nationality} item={Object.keys(jsonData[item])} />
      );
    }
  });

  let renderItems = nation ? (
    <Courses nation={nation} feesType={props.feesType} item={nation} />
  ) : (
    <>
      <h1>Nationals</h1>
      {items}
    </>
  );
  return <div>{renderItems}</div>;
};

export default Nationality;
