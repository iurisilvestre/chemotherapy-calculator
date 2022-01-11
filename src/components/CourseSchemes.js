import React from "react";

const CoursesSchemes = (props) => {
  return (
    <div className="course-schemes">
      <h2>2. Select Course Scheme</h2>
      <select name="select-cancer">
        <option>Select Cancer</option>
      </select>
      <select name="select-regimen">
        <option>Select Regimen</option>
      </select>
    </div>
  );
};
export default CoursesSchemes;
