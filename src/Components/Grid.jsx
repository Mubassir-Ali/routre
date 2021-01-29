import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 300,
    position: 'relative'
  },
}));


let ShoesList;
// let filterShoes=[];


export default function CenteredGrid(props) {
  const classes = useStyles();
  ShoesList=props.prodName.split(" ");

//   for(let i=0;i<ShoesList.length;i++){
//     filterShoes[i]=ShoesList[i][0];
//   }
  
  

console.log(props);

  return (
    <Card className={classes.root}>
      <a href={props.images[0]}>
      <CardActionArea className="cardActionArea">
      <Typography className='cardContent-discount' variant="body2" component="p" align="center">
         {props.discount}% OFF
        </Typography>
        <CardMedia
          className={classes.media}
          image={props.images[0]}
          title="Shoes"
          
        /> 
       </CardActionArea>

      </a>

      <CardContent className='cardContent'>
      <Typography variant="body2" color="textSecondary" component="p" align="justify">
          {ShoesList[0].toUpperCase()}
        </Typography>
        <Typography component="p" align='left' variant="body2">
          BRAND: {props.brand}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align="justify">
          ID: {props.pid}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align="justify">
        {props.discount>0?
        <div className="productOff"><span className='newPrice'>${Math.floor(props.salePrice/72.88)} </span>
        <span className='discount'>${Math.floor(props.listingPrice/72.88)}</span></div>
        : <span className='newPrice'>${Math.floor(props.salePrice/72.88)} </span>}
        </Typography>
      
 
      </CardContent>
    </Card>
  );
}
