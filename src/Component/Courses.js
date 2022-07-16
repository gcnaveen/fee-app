import React from "react";
import DropDown from "./DropDown";
import Level from "./Level";

function Courses(props) {
  const [course, setCourse] = React.useState();
  let courses = ["Medical", "Dental", "Ayurveda"];

  const selectCourse = (e) => {
    setCourse(e);
  };

  const renderItem = course ? (
    <Level nation={props.nation} feesType={props.feesType} course={course} />
  ) : (
    <>
      <h1>All Courses</h1>
      <DropDown onSubmit={selectCourse.bind(this)} item={courses} />
    </>
  );

  return <div>{renderItem}</div>;
}

export default Courses;
