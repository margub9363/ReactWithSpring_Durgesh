import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse = () => {
  return (
    <Fragment>
      <div className="text-center my-3">
        <h1 className="text-centre my-3">Fill Course details</h1>
      </div>
      <Form>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input type="text" placeholder="Enter here" name="id" id="userId" />
        </FormGroup>

        <FormGroup>
          <label for="title">Course Title</label>
          <Input type="text" placeholder="Enter titile here" id="title" />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button color="warning ml-2">Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
