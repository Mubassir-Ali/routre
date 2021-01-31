import React from 'react';
import { ShoesFilter } from './ShoesFilter';

export const WShoes = () => {
	return (
		<div>
			<ShoesFilter start={0} end={20} gender="Women's" />
		</div>
	);
};
