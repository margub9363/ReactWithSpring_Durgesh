import React from "react";
import { useEffect } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

const Course = ({ course }) => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Card>
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger">Delete</Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
