import Button from "@restart/ui/esm/Button";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div
      className="container
    "
    >
      <InputGroup className="my-3">
        <FormControl placeholder="Search here" />
        <Button variant="outline-primary">Search</Button>
      </InputGroup>
    </div>
  );
};

export default Home;
