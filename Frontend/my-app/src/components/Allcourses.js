import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bookApi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse = (course) => {
  // calling loading course  function
  useEffect(() => {
    getAllCourseFromServer();
  });

  const [courses, setCourses] = useState([
    { title: "Java", description: "Basic Java Course" },
    { title: "Python", description: "Basic Python Course" },
    { title: "React", description: "Basic React Course" },
  ]);

  useEffect(() => {
    document.title = "All Course";
  }, []);

  // function to call server
  const getAllCourseFromServer = () => {
    console.log(base_url);
    axios.get(`${base_url}/courses`).then(
      (success) => {
        // success
        console.log(success.data);
        toast.success("Success", {
          position: "bottom-center",
        });
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong", {
          position: "bottom-center",
        });
      }
    );
  };

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
