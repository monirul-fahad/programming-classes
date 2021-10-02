import "./App.css";
import GrandFather from "./components/GrandFather/GrandFather";
import { createContext, useState } from "react";

export const RingContext = createContext("ring");
function App() {
  const [house, setHouse] = useState(1);
  const ornaments = "Daimond Ring";
  return (
    <RingContext.Provider value={ornaments}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
        <GrandFather ornaments={ornaments} house={house}></GrandFather>
      </div>
    </RingContext.Provider>
  );
}

export default App;
