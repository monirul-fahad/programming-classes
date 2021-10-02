import React from "react";
import Special from "../Spacial/Special";

const Myself = (props) => {
  const { house } = props;
  return (
    <div>
      <h2>Myself</h2>
      <h5>House: {house}</h5>
      <Special></Special>
    </div>
  );
};

export default Myself;
