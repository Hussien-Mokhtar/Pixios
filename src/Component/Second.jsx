import { second } from "./Data";
import { useState } from "react"
import leftarrow from "../Pixio/leftarrow.png"
import rightarrow from "../Pixio/rightarrow.png" 


export default function Second() {
  const [selected, setSelected] = useState(0);
  const Sec = second.length

  return (
    <>
    <div className="second"  >

      <div className="second-left" >
      <img src={second[selected].image} alt="" className="hov" style={{backgroundColor:"#FEEB9D"}} />


   <div className="btnn-1"  style={{backgroundColor:"#FEEB9D"}}>
  <span >{second[selected].button1}   </span > 

    </div>

      </div>
      <div className="second-right" style={{backgroundColor:"black"}} >
        <h1 style={{backgroundColor:"black"}} >Featured <br /> Categories</h1>
        <p  style={{backgroundColor:"black"}}>Discover the most <br/> trending products in<br/>Pixio.</p>

        <div className="arrows-2"> 
      <img onClick={() => 
      { selected == 0 ?setSelected(Sec - 1) :setSelected((res) => res - 1);
      }}  src={leftarrow} alt="" />


      <img onClick={() =>
       { selected == (Sec- 1) ?setSelected(0) :setSelected((res) => res + 1 ) 
      }} 
       src={rightarrow} alt="" className="arr-r"/>

    </div>


      </div>
    </div>
    </>
  )
}
