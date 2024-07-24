import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import shirt1 from "../Pixio/shirt1.png"
import shirt2 from "../Pixio/shirt2.png"
import shirt3 from "../Pixio/shirt3.png"
import shirt4 from "../Pixio/shirt4.png"



export default function Fifth() {
  return (
    <>
        <div className="forth" >

            <h1 className='block'>✦ ------- ✦ Blockbuster Deals ✦ ------- ✦</h1>
        <Container >
      <Row>
        <Col md={3} className='forth-left' > <img src={shirt1} h alt="" style={{marginTop:"20%"}}/>
        <div className="dis"><h5>Solid Cut Away Collar <br /> Casual Shirt </h5> <span>$80 <br /> <del>$95</del></span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div>
        </Col>
        
        <Col md={3} className='forth-left'> <img src={shirt2} h alt="" style={{marginTop:"20%"}}/>
        <div className="dis"><h5>Solid Cut Away Collar <br /> Casual Shirt </h5> <span>$70 <br /> <del>$85</del></span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div>
        </Col>
        <Col md={3} className='forth-left'><img src={shirt3} h alt="" style={{marginTop:"20%"}}/>
        <div className="dis"><h5>Solid Cut Away Collar <br /> Casual Shirt </h5> <span>$85 <br /> <del>$100</del></span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>
        <Col md={3} className='forth-left'><img src={shirt4} h alt="" style={{marginTop:"20%"}}/>
        <div className="dis"><h5>Solid Cut Away Collar <br /> Casual Shirt  </h5> <span>$75 <br /> <del>$90</del></span> 
        </div>

        {/* --- */}

        <div className="i">
        <FaRegHeart className='i-1'/>
        <FaShoppingBasket className='i-2'/>
        </div></Col>



      </Row>
    </Container>
    
    <hr style={{marginTop:"5%"}} />
 </div>
      
    </>
  )
}
