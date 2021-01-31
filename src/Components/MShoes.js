import React from 'react';
import { ShoesFilter } from './ShoesFilter';

export const MShoes = () => {
	return (
		<div>
			<ShoesFilter start={0} end={20} gender="Men's" />
		</div>
	);
};
