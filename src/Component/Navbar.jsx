import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "../Pixio/logo.svg"
import demo1 from "../Pixio/demo-1.png"
import demo2 from "../Pixio/demo-2.png"
import demo3 from "../Pixio/demo-3.png"
import woo from "../Pixio/woogirl-1.png"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import waad from "../Pixio/waad.png"
import yellow from "../Pixio/yellow.png"
import cute from "../Pixio/cute.png"
import squer from "../Pixio/squer.svg"

import { FaSearch } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { RiEqualFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";







export default function Navbaar() {
    return (
        <>
            {/* ****************** H O M E ************* */}

            <nav >
                <Navbar expand="md" className=" bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand href="/"><img src={logo} alt="" className='logo' /></Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" >
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                                <NavDropdown title="Home ✦" className='title' id="navbarScrollingDropdown" >
                                    <div className="grid">
                                        <NavDropdown.Item href="#action3"> <img src={demo1} alt="" />
                                            <h3>Home1</h3>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item href="#action4">
                                            <img src={demo2} alt="" />
                                            <h3>Home2</h3>
                                        </NavDropdown.Item>

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            <img src={demo3} alt="" />
                                            <h3>Home3</h3>
                                        </NavDropdown.Item>
                                    </div>
                                </NavDropdown  >


                                {/* ********* S H O P ********** */}



                                <NavDropdown title="Shop ✦" className='title' id="navbarScrollingDropdown" >

                                    <div className="grid">
                                        <NavDropdown.Item href="#action3">
                                            <h1>Shop Structure</h1>

                                            <h5>Shop Standard</h5>
                                            <h5>Shop List</h5>
                                            <h5>Shop With Category</h5>
                                            <h5>Shop Filters Top Bar</h5>
                                            <h5>Shop Sidebar</h5>
                                            <h5>Shop Style1</h5>
                                            <h5>Shop Style2</h5>
                                        </NavDropdown.Item>

                                        <NavDropdown.Item href="#action4">
                                            <h1>Product Structure</h1>
                                            <h5>Default</h5>
                                            <h5>Thumbnail</h5>
                                            <h5>Grid Media</h5>
                                            <h5> Carousel</h5>
                                            <h5> Full Width</h5>
                                        </NavDropdown.Item>

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">

                                            <h1>Shop Pages</h1>
                                            <h5>Wishlist</h5>
                                            <h5>Cart</h5>
                                            <h5>Checkout</h5>
                                            <h5> Compare</h5>
                                            <h5> Order Tracking</h5>
                                            <h5>Login</h5>
                                            <h5>Registration</h5>
                                        </NavDropdown.Item>

                                        <div className="wooo">
                                            <img src={woo} alt="" />
                                        </div>

                                    </div>



                                    <div className="all">
                                        <div className="card-shop">
                                            <Card style={{ width: '45rem' }}>
                                                <Card.Body >

                                                    <Card.Text>


                                                        <Container>
                                                            <Row>
                                                                <Col sm={8}><h1>Deal of the month</h1>
                                                                    <h4>Yes! Send me exclusive offers, personalised, and unique gift <br /> ideas, tips for shopping on Pixio <br />
                                                                        View All Products.</h4></Col>
                                                                <Col sm={4}><div className="btns">
                                                                    <button>31</button>
                                                                    <button>2</button>
                                                                    <button>30</button>
                                                                    <button>6</button>
                                                                </div></Col>

                                                            </Row>
                                                            <Col>

                                                            </Col>

                                                        </Container>
                                                    </Card.Text>
                                                </Card.Body>


                                            </Card>


                                        </div>

                                    </div>



                                </NavDropdown  >


                                {/* *********** B L O G ********** */}

                                <NavDropdown title="Blog ✦" className='title' id="navbarScrollingDropdown" >

                                    <div className="grid">
                                        <NavDropdown.Item href="#action3">
                                            <h1>Blog Dark Style</h1>
                                            <h5> Blog 2 Column</h5>
                                            <h5>Blog 2 Column Sidebar</h5>
                                            <h5>Blog 3 Column</h5>
                                            <h5>Blog Half Image</h5>

                                            <h1>Blog Light Style</h1>
                                            <h5> Blog 2 Column</h5>
                                            <h5> Blog 2 Column Sidebar</h5>
                                            <h5>Blog Half Image </h5>
                                            <h5>Blog Exclusive</h5>


                                        </NavDropdown.Item>

                                        <NavDropdown.Item href="#action4">

                                            <h1>Blog Sidebar</h1>
                                            <h5>Blog Left Sidebar</h5>
                                            <h5>Blog Right Sidebar </h5>
                                            <h5>Blog Both Sidebar </h5>
                                            <h5>Blog Wide Sidebar</h5>

                                            <h1>Blog Page</h1>
                                            <h5>Blog Archive</h5>
                                            <h5>Author</h5>
                                            <h5>Blog Category</h5>
                                            <h5>Blog Tag</h5>


                                        </NavDropdown.Item>

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">


                                            <h1> Blog Details</h1>
                                            <h5>Post Standard </h5>
                                            <h5>Post Left Sidebar</h5>
                                            <h5>Post Header Image </h5>
                                            <h5>Post Slide Show</h5>
                                            <h5> Post Side Image</h5>
                                            <h5>Post Gallery </h5>
                                            <h5>Post Gallery Alternative </h5>
                                            <h5>Post Open Gutenberg</h5>
                                            <h5>Post Link</h5>
                                            <h5>Post Audio </h5>
                                            <h5>Post Standard </h5>


                                        </NavDropdown.Item>

                                        <NavDropdown.Item href="#action5">


                                            <h1> Resent Posts</h1>
                                            <div className="all">
                                                <div className="blog">
                                                    <img src={woo} alt="" />
                                                    <div className="side">
                                                        <h5>Cozy Knit Cardigan <br /> Sweater <p>July 23, 2023</p> </h5>
                                                    </div>

                                                </div>
                                                <div className="blog">
                                                    <img src={waad} alt="" />
                                                    <div className="side">
                                                        <h5>Sophisticated <br /> Swagger Suit <p>July 23, 2023</p> </h5>
                                                    </div>

                                                </div>
                                                <div className="blog">
                                                    <img src={yellow} alt="" />
                                                    <div className="side">
                                                        <h5>Athletic Mesh <br /> Sports Leggings <p>July 23, 2023</p> </h5>
                                                    </div>

                                                </div>
                                                <div className="blog">
                                                    <img src={cute} alt="" />
                                                    <div className="side">
                                                        <h5>Satin Wrap Party <br /> be Blouse <p>July 23, 2023</p> </h5>
                                                    </div>

                                                </div>



                                            </div>


                                        </NavDropdown.Item>

                                    </div>

                                </NavDropdown  >



                                {/* *********** P O R T F O L I O ********** */}

                                <NavDropdown title="Portfolio ✦" className='title' id="navbarScrollingDropdown">


                                    <div className="all" >
                                        <div className="grid-2" >

                                            <NavDropdown.Item href="#action5" >
                                                <img src={squer} alt="" />
                                                <p>Portfoil Tails</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p> Collage Style 1</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Collage Style 2</p>
                                            </NavDropdown.Item>

                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Masonry Grid</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Cobble Style 1</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Cobble Style 2</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Portfolio Thumbs Slider</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Portfolio Film Strip</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Carousel Showcase</p>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action5">
                                                <img src={squer} alt="" />
                                                <p>Portfolio Split Slider</p>

                                            </NavDropdown.Item>

                                        </div>

                                    </div>
                                </NavDropdown  >
                                {/* *********** P A G E S ********** */}

                                <NavDropdown title="Pages ✦" className='title' id="navbarScrollingDropdown" >
                                    <div className="grid" style={{ marginLeft: "-40rem" }}>
                                        <NavDropdown.Item href="#action3">
                                            <h1>Pages</h1>
                                            <h5> About Us </h5>
                                            <h5>About me</h5>
                                            <h5>What We Do</h5>
                                            <h5>Faqs 1 </h5>
                                            <h5> Faqs 2</h5>
                                            <h5>Our Team</h5>


                                        </NavDropdown.Item>

                                        <NavDropdown.Item href="#action4">


                                            <h1> Contact Us</h1>
                                            <h5>Contact Us 1</h5>
                                            <h5>Contact Us 2</h5>
                                            <h5>Contact Us 3</h5>
                                            <h5>Web Pages</h5>
                                            <h5>Error 404 1</h5>
                                            <h5>Error 404 2</h5>
                                            <h5>Coming Soon</h5>
                                            <h5>Under Construction</h5>


                                        </NavDropdown.Item>

                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action3">

                                            <h1>Banner Style</h1>
                                            <h5> Banner With BG Color</h5>
                                            <h5>Banner With Image</h5>
                                            <h5>Banner With Video</h5>
                                            <h5>Banner With Kanbern</h5>
                                            <h5> Banner Small</h5>
                                            <h5> Banner Medium</h5>
                                            <h5>Banner Large</h5>


                                        </NavDropdown.Item>

                                        <NavDropdown.Item href="#action3">
                                            <h1>Header Style</h1>
                                            <h5> Header Style 1</h5>
                                            <h5>Header Style 2 </h5>
                                            <h5>Header Style 3</h5>
                                            <h5>Header Style 4</h5>
                                            <h5> Header Style 5</h5>
                                            <h5> Header Style 6</h5>
                                            <h5>Header Style 7</h5>


                                        </NavDropdown.Item>

                                        <NavDropdown.Item href="#action3">
                                            <h1>Footer Style</h1>
                                            <h5> Footer Style 1</h5>
                                            <h5>Footer Style 2</h5>
                                            <h5>Footer Style 3</h5>
                                            <h5>Footer Style 4</h5>
                                            <h5> Footer Style 5</h5>
                                            <h5> Footer Style 6</h5>
                                            <h5>Footer Style 7</h5>


                                        </NavDropdown.Item>


                                        <NavDropdown.Item href="#action5">
                                            <h1> Dashboard</h1>
                                            <h5>Dashboard</h5>
                                            <h5>Orders</h5>
                                            <h5>Orders Details</h5>
                                            <h5>Orders Confirmation</h5>
                                            <h5> Downloads</h5>
                                            <h5>Return Request</h5>
                                            <h5>Return Request Detail</h5>
                                            <h5>Return Request Confirmed</h5>

                                        </NavDropdown.Item>


                                    </div>
                                    <button className='menue-btn'>Menue Styles <IoIosArrowForward className='icon-arrow' />  </button>

                                </NavDropdown  >


                                {/* *********** M Y A C C O U  N T ********** */}

                                <NavDropdown title="My Account ✦" className='title' id="navbarScrollingDropdown" >
                                    <div className="grid ">
                                        <NavDropdown.Item href="#action5">

                                            <h5>Dashboard</h5>
                                            <h5>Orders</h5>
                                            <h5>Orders Details</h5>
                                            <h5>Orders Confirmation</h5>
                                            <h5>Downloads</h5>
                                            <h5>Return Request</h5>
                                            <h5>Return Request</h5>
                                            <h5>Return Request Detail</h5>
                                            <h5>Return Request Confirmed</h5>
                                            <h5>Return Request Confirmed</h5>
                                            <h5>Profile</h5>
                                            <h5>Address</h5>
                                            <h5>Shipping Methods</h5>
                                            <h5>Payment Methods</h5>
                                            <h5>Review</h5>
                                            <h5>Billing Address</h5>
                                            <h5>Shipping Address</h5>
                                            <h5>Cancellation Requests</h5>



                                        </NavDropdown.Item>
                                    </div>
                                </NavDropdown  >





                            </Nav>


                            <Form className="d-flex">

                                <div className="icons">
                                    <FaSearch />
                                    <IoIosHeartEmpty />
                                    <FiShoppingCart />
                                    <RiEqualFill className='equel' />

                                </div>

                            </Form>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </nav>
        </>
    )
}
