import React from 'react'
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
let productName = [];
let womenShoesList = [];
let womenShoes = [];
let wShoes = [];

export const ShoesFilter = (props) => {
    const classes = useStyles();

    for (let i = 0; i < Shoes.length; i++) {
        productName.push(Shoes[i]["Product Name"]);
        womenShoesList[i] = productName[i].split(" ");
        womenShoes.push(womenShoesList[i][0]);
      }
    
      let indices = womenShoes
        .map((e, i) => (e === props.gender ? i : ""))
        .filter(String);
    
      for (let i = 0; i < indices.length; i++) {
        wShoes[i] = Shoes[indices[i]];
      }
    
    
      range=wShoes.slice(props.start, props.end)
    
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            {Object.entries(range).map(
              ([index, { Brand, Images, Description}]) => (
                <Grid key={index} item xs={12} sm={6} lg={3}>
                  <GridShoes brand={Brand} images={Images} desc={Description} />
                </Grid>
              )
            )}
          </Grid>
        </div>
      );
}