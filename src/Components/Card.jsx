import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		
	}
});

export default function ImgMediaCard(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<CssBaseline />
				<Container maxWidth="sm">
					<Grid item xs>
						<Card className={classes.root}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Contemplative Reptile"
									height="140"
									image={props.img[0]}
									title={props.brand}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{props.brand}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										{props.disc}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Container>
			</Grid>
		</div>
	);
}