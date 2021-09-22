import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h1>Comments Loaded: {comments.length}</h1>
      {comments.map((comment) => (
        <Comments
          name={comment.name}
          email={comment.email}
          id={comment.id}
          body={comment.body}
        ></Comments>
      ))}
    </div>
  );
}

function Comments(props) {
  return (
    <div className="comments">
      <h3>
        Name: {props.name}, ID: {props.id}
      </h3>
      <h5>Email: {props.email}</h5>
      <p>Comment: {props.body}</p>
    </div>
  );
}

export default App;
