import React from "react";
import { Shoes } from "../data/ShoesData";

let firstFive = [];

export const WmenIndex = () => {
  firstFive = Shoes.slice(0, 5);


  return (
    <div>
      {Object.entries(firstFive).map(([slug, { Brand, Images }]) => (
        <li key={slug}>
          <h3>{Brand}</h3>
          <img src={Images[0]}></img>
        </li>
      ))}
    </div>
  );
};

