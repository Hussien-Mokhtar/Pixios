import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import woo from "../Pixio/woogirl-1.png"
import waad2 from "../Pixio/waad2.png"
import blue from "../Pixio/blue.png"
import check from "../Pixio/checkgirl.png"
import carizma from "../Pixio/carizma.png"
import pink from "../Pixio/pink.png"
import classic from "../Pixio/classic.png"
import curly from "../Pixio/curlygirl.png"




export default function Forth() {
  return (
    <>  
    <div className="forth">

    <Container>
      <Row>
        <Col> <h1>Most Popular Products</h1></Col>
        <Col>
        <div className="many">
        <Container>
      <Row>
        <Col className='all'><h1>ALL</h1></Col>
        <Col className='hov'>Dresses</Col>
        <Col className='hov'>Tops</Col>
        <Col className='hov'>Outerwear</Col> 
        <Col className='hov'>Jacket</Col>
      </Row>
    </Container>
        </div>
        </Col>
      </Row>      
    </Container>

      {/* --------------- */}

    <Container>
      <Row>
        <Col className='forth-left'> <img src={woo} h alt=""/>
        <div className="dis"><h5>Cozy Knit Cardigan <br /> Sweater </h5> <span>$80</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div>
        </Col>
        
        <Col className='forth-left'> <img src={waad2} h alt=""/>
        <div className="dis"><h5>Sophisticated  <br /> Swagger Suit </h5> <span>$70</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>
        <Col className='forth-left'><img src={blue} h alt=""/>
        <div className="dis"><h5>Classic Denim Skinny <br/>Jeans </h5> <span>$85</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>
        <Col className='forth-left'><img src={check} h alt=""/>
        <div className="dis"><h5>Athletic Mesh Sports <br /> Leggings  </h5> <span>$75</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>
      </Row>
    </Container>

   {/* *** second under cards*** */}

   <Container>
      <Row>
        <Col className='forth-left'> <img src={carizma} h alt=""/>
        <div className="dis"><h5>Vintage Denim <br /> Overalls Shorts</h5> <span>$80</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div>
        </Col>
        
        <Col className='forth-left'> <img src={pink} h alt=""/>
        <div className="dis"><h5>Satin Wrap Party <br /> Blouse</h5> <span>$80</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>
        <Col className='forth-left'><img src={classic} h alt=""/>
        <div className="dis"><h5>Plaid Wool Winter <br /> Coat </h5> <span>$80</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>
        <Col className='forth-left'><img src={curly} h alt=""/>
        <div className="dis"><h5>Water-Resistant <br /> Windbreaker Jacket </h5> <span>$80</span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>
      </Row>
    </Container>



    </div>

    </>
  )
}
