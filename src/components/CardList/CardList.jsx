import Card from "../Card/Card";
import "./CardList.css"

import React from "react";

function CardList({ data }) {
  return (
    <div className="cardlist">
      {data.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}/>
      ))}
    </div>
  );
}

export default CardList;
