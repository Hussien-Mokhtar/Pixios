import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from "../Pixio/logo.svg"
import { FaArrowRight } from "react-icons/fa6";

import waad from "../Pixio/waad.png"
import yellow from "../Pixio/yellow.png"
import woo from "../Pixio/woogirl-1.png"

export default function Footer() {
    return (
        <>
        <hr style={{borderTop:"2px solid black"}}/>

        <div className="contain">
        <div className="footer">
                    <Row>
                        <Col md={3} className='footer-1'> <img src={logo} alt="" /><br /><br />
                            <h1>Address : 451 Wall Street, UK, London <br /> <br />E-mail : example@info.com <br /> <br />Phone : (064) 332-1233 <br /><br /><br />Subscribe To Our Newsletter</h1>

                            <section>
                                <input className='input-footer' type="text" placeholder='Your Email Adress ' required />
                                <FaArrowRight className='small-arrow' />

                            </section>

                        </Col>
                        {/* ----------------------- */}
                        <Col md={3}>
                            <div className="img-footer">

                                <Row>
                                        
                                        <Col> <img src={woo} alt="" /></Col>
                                        <Col> <h3>Cozy Knit Cardigan Sweater</h3>
                                            <p>July 23, 2023</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        
                                        <Col> <img src={waad} alt="" /></Col>
                                        <Col> <h3>Sophisticated Swagger Suit</h3>
                                            <p>July 23, 2023</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                        <Col> <img src={yellow} alt="" /></Col>
                                        <Col> <h3>Athletic Mesh Sports <br /> Leggings</h3>
                                            <p>July 23, 2023</p>
                                        </Col>
                                    </Row>
                            </div>

                        </Col>


                         <Col md={2}>
                         <p className='p-title-footer'>Our Stores</p>
                         <p>New York <br /><br />London SF <br /><br />Edinburgh <br /><br />Los Angeles <br /><br />Chicago<br /> <br />Las Vegas</p>
                         </Col>
                        <Col md={2}><p className='p-title-footer'>Useful Links</p>
                        <p>Privacy Policy <br /><br />Returns <br /><br />Terms & Conditions <br /><br />Contact Us <br /><br />Latest News<br /> <br />Our Sitemap</p></Col>
                        
                         <Col md={2}><p className='p-title-footer'>Footer Menu</p>
                        <p>Instagram Profile <br /><br />New Collection <br /><br />Woman Dress<br /><br />Contact Us <br /><br />Latest News<br /> </p>
                        </Col>
                        


                    </Row>
                    <hr />

            </div>

        </div>
        </>
    )
}
