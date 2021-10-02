import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const { id, name, phone, website, address } = props.friend;
  const firendStyleaa = {
    border: "3px solid goldenrod",
    padding: "10px",
    borderRadius: "10px",
  };

  //button handle
  const history = useHistory();
  const handleFriendClick = () => {
    history.push(`/friend/${id}`);
  };
  return (
    <div style={firendStyleaa}>
      <h3>
        I am {name}. My Id:{id}
      </h3>
      <h5>Call me: {phone} </h5>
      <p>Visit me: {website}</p>
      <p>
        <small>I Live in: {address.city}</small>
      </p>
      <Link to={`/friend/${id}`}>Visit me</Link>
      <br />
      <br />
      <Link to={`/friend/${id}`}>
        <button>Visit Me</button>
      </Link>
      <br />
      <br />
      <button onClick={handleFriendClick}>Visit Me Again</button>
    </div>
  );
};

export default Friend;
