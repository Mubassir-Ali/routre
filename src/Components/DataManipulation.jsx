import React from "react";
import { Shoes } from "../data/ShoesData";

let brand = [];
let unique = [];
let productName = [];
let productNameArray = [];
let pro = [];
let uniqueProduct = [];

export const DataManipulation = () => {
  // console.log(Shoes[0].Brand);

  for (let i = 0; i < Shoes.length; i++) {
    brand.push(Shoes[i].Brand);
  }

  // console.log(brand);

  unique = brand.filter((item, i, arr) => arr.indexOf(item) === i);

  console.log(unique);

  for (let i = 0; i < Shoes.length; i++) {
    productName.push(Shoes[i]["Product Name"]);
  }

  for (let i = 0; i < Shoes.length; i++) {
    productNameArray[i] = productName[i].split(" ");
  }

  // console.log(productNameArray[0][2]);

  for (let i = 0; i < Shoes.length; i++) {
    pro[i] = productNameArray[i][0];
  }

  delete pro[1557];

  let names = pro.slice(0, pro.length - 1);
  let convertedNames = names.map((names) => names.toLowerCase());

  uniqueProduct = convertedNames.filter(
    (item, index, arr) => arr.indexOf(item) === index
  );
  console.log(uniqueProduct);
  return <div></div>;
};
