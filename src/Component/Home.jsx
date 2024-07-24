import { useState } from "react"
import { testData } from "./Data"
import leftarrow from "../Pixio/leftarrow.png"
import rightarrow from "../Pixio/rightarrow.png"

import { FaStarOfLife } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import { GiPolarStar } from "react-icons/gi";

export default function Home() {
    const [selected, setSelected] = useState(0);
    const tLength = testData.length
  
  return (
    <>

<div className="container">

<div className="first">

  <div className="first-l">

    <span>{testData[selected].review}</span>
    <span >{testData[selected].price}   </span > 

<div className="btnn">
 <span >{testData[selected].button1}   </span > 
    <span >{testData[selected].button2}   </span > 

</div>

  </div>
  <div className="first-r">

  <GiPolarStar className="small-star"/>
  <GiPolarStar className="small-star2"/>

  <img src={testData[selected].image} alt="" className="hov" />


    <div className="arrows"> 
      <img onClick={() => 
      { selected == 0 ?setSelected(tLength - 1) :setSelected((res) => res - 1);
      }}  src={leftarrow} alt="" />


      <img onClick={() =>
       { selected == (tLength - 1) ?setSelected(0) :setSelected((res) => res + 1 ) 
      }} 
       src={rightarrow} alt="" className="arr-r"/>

    </div>
    <div className="playy">

    <Link to="https://youtu.be/YwYoyQ1JdpQ"> <FaPlay className="play"/> </Link>

    </div>
  </div>

</div>


<div className="emo">
<FaStarOfLife className="star"/>

<div className="words">
<h5>Summer Collection</h5>
<h1>TRENDY AND CLASSIC <br /> FOR THE NEW SEASON</h1>

</div>
</div>


</div>

    </>
  )
}
