import React from "react";
import "./Card.css";

function Card({ coffee }) {
  return (
      <div className="card">
        <div className="image">image should be her ok lets' seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeszdfbsfbdsfbssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssee</div>
        <div className="content">
          <h2>{coffee.title}</h2>
          <p>{coffee.description}</p>
          <ol>
            {coffee.ingredients.map((ingredients) => (
              <li>{ingredients}</li>
            ))}
          </ol>
        </div>
      </div>
  );
}

export default Card;
