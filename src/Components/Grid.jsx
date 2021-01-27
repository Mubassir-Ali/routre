import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Shoes } from '../data/ShoesData';

let firstFive = [];


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		
	},
	media: {
		height: 200
	}
}));

export default function CenteredGrid() {
    const classes = useStyles();
    
    firstFive = Shoes.slice(0, 20);


	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{Object.entries(firstFive).map(([index,{ Brand, Images, Description}]) => (
					<Grid key={index} item xs={12} sm={6} lg={3}>
                    
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={Images[1]}
									title="Shoes"
								/>

								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{Brand}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										{Description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
