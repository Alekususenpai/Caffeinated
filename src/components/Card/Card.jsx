import React from "react";
import "./Card.css";
import { GiCoffeeBeans } from "react-icons/gi";

function Card({ coffee }) {
  return (
    <div class="card">
      <h2>
        <span>
          <GiCoffeeBeans />
        </span>{" "}
        {coffee.title}
      </h2>
      <p>{coffee.description}</p>
      <ol>
        {" "}
        Ingredients:
        {coffee.ingredients.map((ingredients) => (
          <li>{ingredients}</li>
        ))}
      </ol>
    </div>
  );
}

export default Card;
