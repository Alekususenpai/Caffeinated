import React from "react";

function Card({ coffee }) {
  return (
    <div>
      <h2>{coffee.title}</h2>
      <p>{coffee.description}</p>
      <ol>
        {coffee.ingredients.map((ingredients) => (
          <li>{ingredients}</li>
        ))}
      </ol>
    </div>
  );
}

export default Card;
