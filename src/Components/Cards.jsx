import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { Shoes } from '../data/ShoesData';
let firstFive = [];

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	  },
	  gridList: {
		width: 500,
		height: 450,
	  },
}));

export default function AutoGrid(props) {
	const classes = useStyles();
	firstFive = Shoes.slice(0, 10);
	const data = [
		'eslint-disable-next-line to the line before.',
		'eslint-disable-next-line to the line before.',
		'eslint-disable-next-line to the line before.',
		'eslint-disable-next-line to the line before.',
		'eslint-disable-next-line to the line before.'
	];

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={6}>
				<Card>
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
			</GridList>
		</div>
	);
}
