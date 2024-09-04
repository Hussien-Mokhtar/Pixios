import { useState } from "react"
import { testData } from "./Data"
import leftarrow from "../Pixio/leftarrow.png"
import rightarrow from "../Pixio/rightarrow.png"

import { FaStarOfLife } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import { GiPolarStar } from "react-icons/gi";
import { motion } from "framer-motion";


export default function Home() {
    const [selected, setSelected] = useState(0);
    const tLength = testData.length

  return (
    <>


<div className="container">

<div className="first">

  < motion.div className="first-l" 
     initial={{ x: '-150%' }}
     animate={{ x: 0 }}
     transition={{ duration: 3, ease: 'easeOut' }}
    
  
  >

    <span> {testData[selected].review} </span > 
    <span> {testData[selected].price}   </span > 

<div className="btnn">
 <span >{testData[selected].button1}   </span > 
    <span >{testData[selected].button2}   </span > 

</div>

  </motion.div>
  <div className="first-r">

  <GiPolarStar className="small-star"/>
  <GiPolarStar className="small-star2"/>

  < motion.img src={testData[selected].image} alt="" className="hov" 
   initial={{ x: '150%', rotate: -180 }}
   animate={{ x: 0 , rotate: 0}}
   transition={{ duration: 2, ease: 'easeOut' }}
  
  />


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

    <Link to="https://youtu.be/YwYoyQ1JdpQ" target="_blank"> <FaPlay className="play"/> </Link>

    </div>
  </div>

</div>


< motion.div className="emo"
     initial={{ x: '-150%' }}
     animate={{ x: 0 }}
     transition={{ duration: 3, ease: 'easeOut' }}
>
<FaStarOfLife className="star"/>

<div className="words">
<h5>Summer Collection</h5>
<h1>TRENDY AND CLASSIC <br /> FOR THE NEW SEASON</h1>

</div>
</motion.div>


</div>

    </>
  )
}
