import { useEffect, useState } from "react";
import "./App.css";
import Device from "./components/Device/Device";

function App() {
  const [steps, setSteps] = useState(0);
  const handleIncreaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div className="App">
      <h3>My steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name="Phone" steps={steps} price="17000" />
    </div>
  );
}

export default App;
