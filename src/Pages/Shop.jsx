import "./Shop.css"
import cart from "../Pixio/cart.jpg"
import Navbaar from "../Component/Navbar"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSliders } from "react-icons/fa6";
import woo from "../Pixio/woogirl-1.png"

import waad2 from "../Pixio/waad2.png"
import blue from "../Pixio/blue.png"
import check from "../Pixio/checkgirl.png"
import carizma from "../Pixio/carizma.png"
import pink from "../Pixio/pink.png"
import classic from "../Pixio/classic.png"
import curly from "../Pixio/curlygirl.png"
import harry from "../Pixio/harry.png"
import red from "../Pixio/red.png"
import purple from "../Pixio/purple.png"
import smile from "../Pixio/smile.png"
import Footer from "../Component/Footer";

import React, { useState } from "react";
import { Slider } from "primereact/slider";
import "primereact/resources/themes/lara-light-cyan/theme.css";



export default function Shop() {
   const [value, setValue] = useState([20,80]);
  return (
    <>

    <Navbaar/>
    
      <div className="shop-img">
        <img src={cart} alt="" />

        <div className="inside-title">
            <p style={{fontSize:"45px" , fontWeight:"700"}}>Shop Standard </p> 
            <p className="home-link"> <Link to="/" style={{color:"white"}}>Home</Link> <IoIosArrowForward className="inside-icon"/> <Link to="/shop" style={{color:"white"}}>Shop Standard</Link> </p>
        </div>
      </div>

      <Container className="contain-shop">  
      <Row>
        <Col xs={6} md={4}>
          <div className="sliders">

          <h5 className="slide"><FaSliders/>Filter</h5>
        
        <form action="">
        <input type="text" placeholder="Search Product" required />

        </form>
          </div>


<div className="prime">
<h6 className="size-h">Price</h6>

<div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
        </div>

</div>

          <div className="color">
            <h6 className="size-h">Color</h6>


            <div className="ten">

            <div className="ten1"></div>
            <div className="ten2"></div>
            <div className="ten3"></div>
            <div className="ten4"></div>
            <div className="ten5"></div>
            <div className="ten6"></div>
            <div className="ten7"></div>
            <div className="ten8"></div>
            <div className="ten9"></div>
            <div className="ten10"></div>
            </div>



            <h6 className="size-h">Size</h6>
           <div className="size">
           
           <button>4</button>
           <button>6</button>
           <button>8</button>
           <button>10</button>
           <button>12</button>
           <button>14</button>
           <button>16</button>
           <button>18</button>
           <button>20</button>

           </div>

           <h6 className="size-h">Category</h6>

           <div className="category">
            <h6>Dresses <span>(10)</span></h6>
            <h6>Top & Blouses <span>(5)</span></h6>
            <h6>Boots <span>(17)</span></h6>
            <h6>Jewelry <span>(13)</span></h6>
            <h6>Makeup <span>(06)</span></h6>
            <h6>Fragrances <span>(17)</span></h6>
            <h6>Shaving & Grooming <span>(13)</span></h6>
            <h6>Jacket<span>(06)</span></h6>
            <h6>Coat <span>(22)</span></h6>


           </div>

           <h6 className="size-h">Tags</h6>
           <div className="tags">
               
           <button>Vintage</button>
           <button>Wedding</button>
           <button>Cotton</button>
           <button>Linen</button>
           <button>Navy</button>
           <button>Urban</button>
           <button>Busniss  </button>
           <button>Formal</button>

           </div>

           <button className="reset">RESET</button>





          </div>
        </Col>



      <Col xs={12} md={8}>
        <div className="products">

        <Col sm={3}>
        <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>
        </Col>
        <Col sm={3}><div className="products-r">
           <img src={waad2} h alt=""/>
        <div className="product-title"><h5>Sophisticated <br /> Swagger Suit </h5> <span>$80</span> 
        </div>
           </div>
          </Col>

        <Col sm={3}>
        <div className="products-r">
           <img src={blue} h alt=""/>
        <div className="product-title"><h5>Classic Denim <br /> Skinny Jeans  </h5> <span>$80</span> 
        </div>
           </div>

        </Col>
        <Col sm={3}>
        <div className="products-r">
           <img src={check} h alt=""/>
        <div className="product-title"><h5>Athletic Mesh <br /> Sports Leggings </h5> <span>$80</span> 
        </div>
           </div>

        </Col>

        <Col sm={3}>
        <div className="products-r">
           <img src={carizma} h alt=""/>
        <div className="product-title"><h5>Vintage Denim <br />Overalls Shorts   </h5> <span>$80</span> 
        </div>
           </div>
        </Col>
        <Col sm={3}><div className="products-r">
           <img src={pink} h alt=""/>
        <div className="product-title"><h5>Satin Wrap Party <br /> Blouse </h5> <span>$80</span> 
        </div>
           </div>
          </Col>

        <Col sm={3}>
        <div className="products-r">
           <img src={classic} h alt=""/>
        <div className="product-title"><h5>Plaid Wool Winter<br /> Coat</h5> <span>$80</span> 
        </div>
           </div>

        </Col>
        <Col sm={3}>
        <div className="products-r">
           <img src={curly} h alt=""/>
        <div className="product-title"><h5>Water-Resistant <br /> Windbreaker <br /> Jacket </h5> <span>$80</span> 
        </div>
           </div>

        </Col>
        <Col sm={3}>
        <div className="products-r">
           <img src={harry} h alt=""/>
        <div className="product-title"><h5>Comfy Lounge <br /> Jogger Pants </h5> <span>$80</span> 
        </div>
           </div>
        </Col>
        <Col sm={3}><div className="products-r">
           <img src={smile} h alt=""/>
        <div className="product-title"><h5>Stylish Fedora Hat<br /> Collection   </h5> <span>$80</span> 
        </div>
           </div>
          </Col>

        <Col sm={3}>
        <div className="products-r">
           <img src={red} h alt=""/>
        <div className="product-title"><h5>Suede Ankle <br /> Booties Collection </h5> <span>$80</span> 
        </div>
           </div>

        </Col>
        <Col sm={3}>
        <div className="products-r">
           <img src={purple} h alt=""/>
        <div className="product-title"><h5>Hiking Outdoor <br /> Gear Collection </h5> <span>$80</span> 
        </div>
           </div>

        </Col>


        </div>

        

        {/* --------------- */}

        {/* <div className="products">

        <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>
           <div className="products-r">
           <img src={waad2} h alt=""/>
        <div className="product-title"><h5>Sophisticated <br /> Swagger Suit </h5> <span>$80</span> 
        </div>
           </div>
           <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>
           <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>
           <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>
           <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>
           <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>
           <div className="products-r">
           <img src={woo} h alt=""/>
        <div className="product-title"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>
           </div>


        </div> */}

        </Col>
      </Row>
        </Container>
        <br />
        <Footer/>
        <hr style={{borderTop:"2px solid black"}}/>

    </>
  )
}
