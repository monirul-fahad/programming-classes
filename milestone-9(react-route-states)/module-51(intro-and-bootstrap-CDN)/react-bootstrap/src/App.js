import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const items = [
    {
      name: "first item",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG",
    },
    {
      name: "second item",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG",
    },
    {
      name: "third item",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG",
    },
    {
      name: "fourth item",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG",
    },
    {
      name: "fifth item",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shaheed_Minar.JPG/240px-Shaheed_Minar.JPG",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <Card item={item}></Card>
      ))}
    </div>
  );
}

export default App;
