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
    height: 200,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();


console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.images[0]}
          title="Shoes"
        />
      </CardActionArea>
      <CardContent>
        <Typography component="p" align='left' variant="body2">
          BRAND: {props.brand}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align="justify">
          ID: {props.pid}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align="justify">
        <span className='newPrice'>${Math.floor(props.salePrice/150)} </span><span className='discount'>${Math.floor(props.listingPrice/150)}</span>  
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" align="justify">
         Discount: {props.discount}%
        </Typography>
 
      </CardContent>
    </Card>
  );
}
