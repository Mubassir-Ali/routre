import React,{useState} from "react";

let imgNumber=[1,2,3,4,5,6];
const imgUrl=(imgNumber)=>{
    return `https://content.adidas.co.in/static/Product-AH2430/WOMEN_Originals_SHOES_LOW_AH2430_${imgNumber}.jpg`
} 
export const TestCard = () => {
const [img,setImg]=useState(1)

console.log(img);

  return (
    <div className="card-container">
      <div className="card">
        <div className='main-images'>
          <img src={imgUrl(img)}></img>
          
        </div>
        <div className="sub-images">

        {imgNumber.map((d,i)=>{
            return <img keys={i} src={imgUrl(d)} ></img>

        })}
  
        </div>
      </div>
    </div>
  );
};
