import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pink from "../Pixio/pink.png"
import children from "../Pixio/children.png"
import boy from "../Pixio/boy.png"
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function Third() {
  return (
    <>
<Container>
      <Row>
<Col className='third-left'> <img src={pink} alt="" /> <h2>Women Collection</h2></Col>
        <Col className='third-right'>
        <h1>Set Your Wardrobe With <br /> Our Amazing Selection! <span><BsArrowUpRightCircleFill/> </span></h1>

        <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the</p>

        <div className="both">
            <img src={children} alt="" />
            <img src={boy} alt="" />
        </div>
        </Col>

      </Row>

    </Container>


 <marquee className="marque"> JEANS ✦ T-SHIRT ✦ SHORTS ✦ SHIRTS ✦ JACKET ✦ BLAZER ✦ JEANS ✦ T-SHIRT ✦ SHORTS✦ SHIRTS ✦ JACKET ✦ BLAZER ✦ JEANS ✦ T-SHIRT ✦ SHORTS ✦ SHIRTS ✦ JACKET ✦ BLAZER ✦ JEANS ✦ T-SHIRT ✦ SHORTS✦ SHIRTS ✦ JACKET ✦ BLAZER ✦ 
  
 </marquee>

      
    </>
  )
}
