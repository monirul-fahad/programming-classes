import React, { useContext } from "react";
import { RingContext } from "../../App";

const Special = () => {
  const ornaments = useContext(RingContext);
  return (
    <div>
      <h3>Spacial</h3>
      <small>{ornaments}</small>
    </div>
  );
};

export default Special;
