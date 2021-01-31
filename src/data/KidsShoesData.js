import { Shoes } from './ShoesData';


let range = [];
let pName = [];
let ShoesList = [];
let filterShoes = [];
let wShoes = [];
let rShoes = [];

export const KidsShoesData = () => {

    for (let i = 0; i < Shoes.length; i++) {
		pName.push(Shoes[i]['ProductName']);
		ShoesList[i] = pName[i].split(' ');
		filterShoes.push(ShoesList[i][0]);
    }

    function getAllIndexes(arr, val) {
        var indexes = [],
            i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    }

    let indexes = getAllIndexes(filterShoes, "Unisex");

    for (let i = 0; i < indexes.length; i++) {
        wShoes[i] = Shoes[indexes[i]];
    }
    for (let i = 0; i < wShoes.length; i++) {
        let rand = Math.floor(Math.random() * wShoes.length);
        rShoes[i] = wShoes[rand];
    }

   
    

    return (wShoes.slice(0,20))
}
