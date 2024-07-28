import "./Cart.css"
import cart from "../Pixio/cart.jpg"
import Navbaar from "../Component/Navbar"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import waad2 from "../Pixio/waad2.png"
import woo from "../Pixio/woogirl-1.png"
import check from "../Pixio/checkgirl.png"
import classic from "../Pixio/classic.png"
import pink from "../Pixio/pink.png"
import red from "../Pixio/red.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Footer from "../Component/Footer";
import { Card } from 'primereact/card';
import { IoMdBoat } from "react-icons/io";
import { FcCloseUpMode } from "react-icons/fc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Cardd() {
  const [count, setCount] = useState(0)

  const Plus= () =>{
      setCount(count + 1)
  } 
  const minus = () =>{
      setCount (count - 1)
  } 
  // -------
  const [count1, setCount1] = useState(0)

  const Plus1= () =>{
      setCount1(count1 + 1)
  } 
  const minus1 = () =>{
      setCount1 (count1 - 1)
  } 
  // ---------
  const [count2, setCount2] = useState(0)

  const Plus2= () =>{
      setCount2(count2 + 1)
  } 
  const minus2 = () =>{
      setCount2 (count2 - 1)
  } 
  // --------------
  const [count3, setCount3] = useState(0)

  const Plus3= () =>{
      setCount3(count3 + 1)
  } 
  const minus3 = () =>{
      setCount3 (count3 - 1)
  } 
  // ---------------
  const [count4, setCount4] = useState(0)

  const Plus4= () =>{
      setCount4(count4 + 1)
  } 
  const minus4 = () =>{
      setCount4 (count4 - 1)
  } 
  // ----------------
  const [count5, setCount5] = useState(0)

  const Plus5= () =>{
      setCount5(count5 + 1)
  } 
  const minus5 = () =>{
      setCount5 (count5 - 1)
  } 






  return (
    <>
      <Navbaar/>
      <div className="shop-img">
        <img src={cart} alt="" />

        <div className="inside-title">
            <p style={{fontSize:"45px" , fontWeight:"700"}}>Shop Standard </p> 
            <p className="home-link"> <Link to="/" style={{color:"white"}}>Home</Link> <IoIosArrowForward className="inside-icon"/> Shop Standard</p>
        </div>
      </div>




      <Container>
      <Row>

      <Col sm={8}>

      <div className="quantity">
        <h2>Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Subtotal</h2>
      </div>
      <hr style={{borderTop:"2px solid black"}}/>

      <div className="cart-img">
        <img src={waad2} alt="" />
        <h5>Sophisticated Swagger Suit</h5>
        <h6>	$40.00</h6>

                 <h1 onClick={minus}><span>-</span></h1>
                <h4>{count}</h4>
                <h1 onClick ={Plus}> <span>+</span> </h1>

                <h6>$160.00</h6>
                <h4 style={{color:"white" , backgroundColor:"black"}}>x</h4>
      </div>
      <hr style={{borderTop:"2px solid black"}}/>

      <div className="cart-img">
        <img src={woo} alt="" />
        <h5>Cozy Knit Cardigan Sweater</h5>
        <h6>	$40.00</h6>

                 <h1 onClick={minus1}><span>-</span></h1>
                <h4>{count1}</h4>
                <h1 onClick ={Plus1}> <span>+</span> </h1>

                <h6>$160.00</h6>
                <h4 style={{color:"white" , backgroundColor:"black"}}>x</h4>
      </div>
      <hr style={{borderTop:"2px solid black"}}/>

      <div className="cart-img">
        <img src={check} alt="" />
        <h5>Athletic Mesh Sports Leggings</h5>
        <h6>	$40.00</h6>

                 <h1 onClick={minus2}><span>-</span></h1>
                <h4>{count2}</h4>
                <h1 onClick ={Plus2}> <span>+</span> </h1>

                <h6>$160.00</h6>
                <h4 style={{color:"white" , backgroundColor:"black"}}>x</h4>
      </div>
      <hr style={{borderTop:"2px solid black"}}/>

      <div className="cart-img">
        <img src={classic} alt="" />
        <h5>Plaid Wool Winter Coat</h5>
        <h6>	$40.00</h6>

                 <h1 onClick={minus3}><span>-</span></h1>
                <h4>{count3}</h4>
                <h1 onClick ={Plus3}> <span>+</span> </h1>

                <h6>$160.00</h6>
                <h4 style={{color:"white" , backgroundColor:"black"}}>x</h4>
      </div>
      <hr style={{borderTop:"2px solid black"}}/>

      <div className="cart-img">
        <img src={pink} alt="" />
        <h5>Satin Wrap Party Blouse</h5>
        <h6>	$40.00</h6>

                 <h1 onClick={minus4}><span>-</span></h1>
                <h4>{count4}</h4>
                <h1 onClick ={Plus4}> <span>+</span> </h1>

                <h6>$160.00</h6>
                <h4 style={{color:"white" , backgroundColor:"black"}}>x</h4>
      </div>
      <hr style={{borderTop:"2px solid black"}}/>

      <div className="cart-img">
        <img src={red} alt="" />
        <h5>Suede Ankle Booties Collection</h5>
        <h6>	$40.00</h6>

                 <h1 onClick={minus5}><span>-</span></h1>
                <h4>{count5}</h4>
                <h1 onClick ={Plus5}> <span>+</span> </h1>

                <h6>$160.00</h6>
                <h4 style={{color:"white" , backgroundColor:"black"}}>x</h4>
      </div>
      <hr style={{borderTop:"2px solid black"}}/>



<div className="code">
    <input type="text" placeholder="Coupon Code"  required/>
      <button>UPDATE CART</button>
</div>


      
      </Col>
      
      <Col sm={4}>

      <div className="cart-right">
        <h5>Cart Total</h5>

        <div className="card">

            <Card >
                <p className="m-0">

                  <h5 className="bank">Bank Offer 5% CashBack</h5>

                  
                  <div className="free">
                  <div className="boat">
                    <IoMdBoat className="flower"/>
                  </div>
                    
                    <h5 > FREE <br /><br />Enjoy The Product</h5>
                  </div>


                  <div className="free">
                  <div className="boat">
                    <FcCloseUpMode className="flower"/>
                  </div>
                    
                    <h5 >  Enjoy The Product ..</h5>
                  </div>

                  <div className="order">
                  <h5> <IoMdCheckmarkCircleOutline className="order-icon"/> You will save ₹504 on this order</h5>
                  <hr style={{borderTop:"2px solid black"}}/>
                  </div>

                  <div className="total">
                  <Container>
                <Row>
                <Col><h5>Total</h5></Col>
                <Col><h6>$125.75</h6></Col>
              </Row>
              </Container>
                  </div>

                  <div className="place-order">
                    <button>PLACE ORDER</button>
                  </div>

                </p>
            </Card>
            </div>
      </div>
      
      </Col>

      </Row>
    </Container>
 <br /> <br />

    <Footer/>


    </>
  )
}
