import axios from "axios";
import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bookApi";
import { useState } from "react";

const AddCourse = () => {
  const [bookDetails, setBookDetails] = useState({
    id: null,
    title: null,
    description: null,
  });
  const addCourseHandler = (e) => {
    console.log("Inside addCourseHandler");
    console.log(bookDetails);
    axios
      .post(`${base_url}/courses`, {
        id: bookDetails.id,
        title: bookDetails.title,
        description: bookDetails.description,
      })
      .then(function (response) {
        console.log(response);
        setBookDetails({ id: null, title: null, description: null });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div className="text-center my-3">
        <h1 className="text-centre my-3">Fill Course details</h1>
      </div>
      <Form>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            value={bookDetails.id}
            name="id"
            id="userId"
            onChange={(e) => {
              setBookDetails({ ...bookDetails, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter titile here"
            id="title"
            onChange={(e) => {
              setBookDetails({ ...bookDetails, title: e.target.value });
            }}
            value={bookDetails.title}
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setBookDetails({ ...bookDetails, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button color="success" onClick={() => addCourseHandler()}>
            Add Course
          </Button>
          <Button color="warning ml-2">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
