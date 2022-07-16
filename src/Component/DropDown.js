import React from "react";
function DropDown(props) {
  const selectFee = (e) => {
    props.onSubmit(e.target.value);
  };
  const renderItems = props.item?.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <div>
      <select onChange={selectFee.bind(this)} defaultValue="select type">
        <option value="select type">Select Type</option> {renderItems}{" "}
      </select>
    </div>
  );
}

export default DropDown;
