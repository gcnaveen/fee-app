import React from "react";
import DropDown from "./DropDown";
import Amount from "./Amount";
import jsonData from "../jsonData.json";

function Level(props) {
  const [level, setLevel] = React.useState();
  const [amount, setAmount] = React.useState();
  const [message, setMessage] = React.useState();
  let levels = ["UG", "PG", "UG-DIPLOMA", "Ph.D"];

  React.useEffect(() => {
    if (props.feesType === "Exam Fee") {
      let nation = jsonData[props.feesType];
      let course = null;
      let level1 = null;
      let level2 = null;
      let msg = "Fees Type, 'Exam Fee' all the course level have same fees!";
      setMessage(msg);
      if (props.nation === "INDIAN") {
        course = nation[props.nation];
        level1 = course["ALL_COURSES"];
        level2 = level1["ALL_LEVEL"];

        setAmount(level2["amount"]);
      } else if (props.nation === "FOREIGN") {
        course = nation[props.nation];
        level1 = course["ALL_COURSES"];
        level2 = level1["ALL_LEVEL"];

        setAmount(level2["amount"]);
      } else if (props.nation === "NRI") {
        course = nation[props.nation];
        level1 = course["ALL_COURSES"];
        level2 = level1["ALL_LEVEL"];

        setAmount(level2["amount"]);
      } else if (props.nation === "SAARC") {
        course = nation[props.nation];
        level1 = course["ALL_COURSES"];
        level2 = level1[level];

        setAmount(level2["amount"]);
      }
    } else {
      let nation = jsonData[props.feesType];
      let course = null;
      let level1 = null;
      let level2 = null;
      let msg =
        "Fees Type, 'Application Fee' all course level have different amount!";
      setMessage(msg);
      if (props.nation === "INDIAN") {
        course = nation[props.nation];
        level1 = course["ALL_COURSES"];
        level2 = level1[level];
        console.log(level2?.amount);
        setAmount(level2?.amount);
      } else if (props.nation === "FOREIGN") {
        course = nation[props.nation];
        level1 = course["ALL_COURSES"];
        level2 = level1[level];
        setAmount(level2?.amount);
      }
    }
  }, [props.feesType, props.nation, level, message]);

  const selectLevel = (e) => {
    setLevel(e);
  };

  let renderItem = null;
  if (props.feesType === "Exam Fee" && !level) {
    renderItem = (
      <Amount
        nation={props.nation}
        feesType={props.feesType}
        amount={amount}
        message={message}
        level={level}
        course={props.course}
      />
    );
  } else {
    renderItem = (
      <>
        <h1>All Levels</h1>
        <DropDown onSubmit={selectLevel.bind(this)} item={levels} />
      </>
    );
  }

  const wrapp = amount ? (
    <Amount
      nation={props.nation}
      feesType={props.feesType}
      amount={amount}
      message={message}
      level={level}
      course={props.course}
    />
  ) : (
    renderItem
  );

  return <div>{wrapp}</div>;
}

export default Level;
