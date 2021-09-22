import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MYComponent brand="Apple" price="10000"></MYComponent>
      <MYComponent brand="Linix" price="1020000"></MYComponent>
      <MYComponent brand="Google" price="10000"></MYComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {users.map((user) => (
        <User name={user.name} email={user.email} phone={user.phone}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div
      style={{
        margin: "10px",
        backgroundColor: "magenta",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <h2>User name: {props.name}</h2>
      <h4>User phone: {props.phone}</h4>
      <h4>User email: {props.email}</h4>
    </div>
  );
}

function MYComponent(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: "lightblue",
    border: "3px solid blue",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  const handleAddPoints = () => setPoints(points * 2);
  return (
    <div style={myStyle}>
      <h1>Yo Yo mama, {props.brand} !!!!!!</h1>
      <h4>
        Asking Money, Price: {props.price}, I have Points: {points}
      </h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: "magenta", fontWeight: "bold" }}>
        I can write my own component
      </p>
    </div>
  );
}

export default App;
