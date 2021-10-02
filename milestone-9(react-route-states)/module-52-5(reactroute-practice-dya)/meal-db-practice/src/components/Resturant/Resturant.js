import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Resturant = () => {
  const handleSearchField = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  return (
    <div>
      <div className="my-3">
        <input
          onChange={handleSearchField}
          className="w-50 p-2"
          placeholder="Search Meal Here"
          type="text"
        />
      </div>
      <Row xs={1} md={3} className="g-5 container mx-auto">
        {meals.map((meal) => (
          <Meal key={meal.idmeal} meal={meal}></Meal>
        ))}
      </Row>
    </div>
  );
};

export default Resturant;
