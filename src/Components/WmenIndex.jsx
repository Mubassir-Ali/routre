import { Shoes } from '../data/ShoesData';
// import ImgMediaCard from './Card';
import Card from './Card'
import Cards from './Cards'

let firstFive = [];

const WmenIndex = () => {


	firstFive = Shoes.slice(0, 10);

	console.log(firstFive);

	return (
		<div>
			{Object.entries(firstFive).map(([ slug, { Brand, Images, Description } ]) => (
				<Card brand={Brand} img={Images} disc={Description} />
			))}
		</div>
	);
};

export default WmenIndex

