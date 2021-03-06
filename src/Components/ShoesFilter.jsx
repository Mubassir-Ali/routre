import React from 'react';
import { Shoes } from '../data/ShoesData';
import GridShoes from './Grid';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	}
}));

let range = [];
let pName = [];
let ShoesList = [];
let filterShoes = [];
let wShoes = [];
let rShoes = [];

export function ShoesFilter(props) {
	const classes = useStyles();

	for (let i = 0; i < Shoes.length; i++) {
		pName.push(Shoes[i]['ProductName']);
		ShoesList[i] = pName[i].split(' ');
		filterShoes.push(ShoesList[i][0]);
	}

	if (props.gender) {
		function getAllIndexes(arr, val) {
			var indexes = [],
				i = -1;
			while ((i = arr.indexOf(val, i + 1)) !== -1) {
				indexes.push(i);
			}
			return indexes;
		}

		let indexes = getAllIndexes(filterShoes, props.gender);

		for (let i = 0; i < indexes.length; i++) {
			wShoes[i] = Shoes[indexes[i]];
		}
		for (let i = 0; i < wShoes.length; i++) {
			let rand = Math.floor(Math.random() * wShoes.length);
			rShoes[i] = wShoes[rand];
		}

		range = wShoes.slice(props.start, props.end);
	} else {
		for (let i = 0; i < Shoes.length; i++) {
			let rand = Math.floor(Math.random() * Shoes.length);
			rShoes[i] = Shoes[rand];
		}

		range = rShoes.slice(props.start, props.end);
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{Object.entries(
					range
				).map(
					(
						[
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
							}
						]
					) => (
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
}
