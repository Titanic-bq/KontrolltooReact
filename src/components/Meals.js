import MealItem from "./MealItem";
import PropsTypes from "prop-types";
import { useState, useEffect } from "react";
import "../index.css";
const Meals = (props) => {
  const [mealsData, setMealsData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/meals")
      .then((response) => response.json())
      .then((data) => setMealsData(data));
  }, []);

  console.log(mealsData);
  if (mealsData) {
    return (
      <ul id="meals">
        {mealsData.map((mealsData) => {
          return <MealItem meal={mealsData} key={mealsData.id}></MealItem>;
        })}
      </ul>
    );
  }
};

export default Meals;

