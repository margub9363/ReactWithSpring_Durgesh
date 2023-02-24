import React, { useState } from "react";
import Course from "./Course";

const AllCourse = (course) => {
  const [courses, setCourses] = useState([
    { title: "Java", description: "Basic Java Course" },
    { title: "Python", description: "Basic Python Course" },
    { title: "React", description: "Basic React Course" },
  ]);

  return (
    <div>
      <h1>All Course</h1>
      <p>List of Courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => <Course course={item} />)
        : "No Courses for now"}
    </div>
  );
};

export default AllCourse;
