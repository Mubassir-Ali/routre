import React from "react";
import { Shoes } from "../data/ShoesData";
import GridShoes from "./Grid";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

let range = [];
let pName = [];
let ShoesList = [];
let filterShoes = [];
let wShoes = [];
let rShoes = [];

export const ShoesFilter = (props) => {
  const classes = useStyles();

  for (let i = 0; i < Shoes.length; i++) {
    pName.push(Shoes[i]["ProductName"]);
    ShoesList[i] = pName[i].split(" ");
    filterShoes.push(ShoesList[i][0]);
  }

  if (props.gender) {
     let indices = filterShoes
      .map((e, i) => (e === props.gender ? i : ""))
      .filter(String);

    for (let i = 0; i < indices.length; i++) {
      wShoes[i] = Shoes[indices[i]];
    
    }
    for(let i=0;i<wShoes.length;i++){
      let rand=Math.floor(Math.random()*wShoes.length-1)
      rShoes[i]=wShoes[rand]
    }

    range = rShoes.slice(props.start, props.end);
  }else{
    
    for(let i=0;i<Shoes.length;i++){
      let rand=Math.floor(Math.random()*Shoes.length-1)
      rShoes[i]=Shoes[rand]
    }

    range = rShoes.slice(props.start, props.end);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.entries(range).map(
          ([
            index,
            {
              Brand,
              Images,
              Description,
              ProductID,
              ListingPrice,
              SalePrice,
              Discount,
              ProductName,
              URL
              


            },
          ]) => (
            <Grid key={index} item xs={12} sm={6} lg={3}>
              <GridShoes
                brand={Brand}
                images={Images}
                desc={Description}
                pid={ProductID}
                listingPrice={ListingPrice}
                salePrice={SalePrice}
                discount={Discount}
                prodName={ProductName}
                url={URL}
               
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};
