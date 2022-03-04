import React, { useState } from "react";
import "./Particle.css";
import CoffeeImg from "./coffeecup.jpg";

export default function Particle() {
  const [animation, setAnimation] = useState("open");
  const [display, setDisplay] = useState(true);

  const hide = async (ms) => {
    setAnimation("close");

    await new Promise((r) => setTimeout(r, ms));

    setDisplay(false);
  };

  return (
    <div>
      {display ? (
        <div className={`Modal ${animation}`}>
          <div className="particles">
            {" "}
            <img src={CoffeeImg} alt="coffee"></img>
            <div className="content">
              <h1>Welcome to Caffeinated.</h1>

              <button onClick={() => hide(100)}>Continue</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
