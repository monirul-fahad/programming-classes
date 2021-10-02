import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const FriendDetail = () => {
  const history = useHistory();

  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  const handleClick = () => {
    history.push("/Friends");
  };
  return (
    <div>
      <h2>Friend name is: {friend.name}</h2>
      <h3>Mobile: {friend.phone}</h3>
      <p>Works at: {friend.company?.name}</p>
      <br />
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};

export default FriendDetail;
