import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = (props) => {
  const { house } = props;
  return (
    <div>
      <h2>Father</h2>
      <h5>House: {house}</h5>
      <div style={{ display: "flex" }}>
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Father;
