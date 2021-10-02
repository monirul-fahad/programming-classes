import React from "react";
import { Card, Col } from "react-bootstrap";

const Meal = (props) => {
  const { strMeal, strCategory, strArea, strInstructions, strMealThumb } =
    props.meal;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title className="fw-bold">{strMeal}</Card.Title>
          <p className="fw-bold">
            <small>
              Catagory: {strCategory}, Origin: {strArea}.
            </small>
          </p>
          <Card.Text>{strInstructions.slice(0, 120)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meal;
