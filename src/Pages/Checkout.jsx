import "./Checkout.css"
import Navbaar from "../Component/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import cart from "../Pixio/cart.jpg"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";

import { ChevronDownIcon } from 'primereact/icons/chevrondown';
import { ChevronRightIcon } from 'primereact/icons/chevronright';
import { Checkbox } from "primereact/checkbox";

import { Card } from 'primereact/card';
import { IoMdBoat } from "react-icons/io";
import { FcCloseUpMode } from "react-icons/fc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Footer from "../Component/Footer";


export default function Checkout() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'If your order has not yet shipped, you can contact us to change your shipping address' } ,
    ];

    // -------------

    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'UK', code: 'UK' },
        { name: 'Another option', code: 'BR' },
        { name: 'Iraq', code: 'CN' },
        { name: 'India', code: 'EG' },
    ];
    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div className="py-2 px-3">
                {selectedCountry ? (
                    <span>
                        <b>{selectedCountry.name}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    // -------------------------

    const categories = [
        { name: ' Create an account?', key: 'A' },
        { name: 'Ship to a different address?', key: 'M' },
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };


  return (
    <>
      <Navbaar/>
      <div className="shop-img">
        <img src={cart} alt="" />

        <div className="inside-title">
            <p style={{fontSize:"45px" , fontWeight:"700"}}>Shop Checkout </p> 
            <p className="home-link"> <Link to="/" style={{color:"white"}}>Home</Link> <IoIosArrowForward className="inside-icon"/> Shop Checkout</p>
        </div>
      </div>

      <Container>
      <Row>
        <Col sm={8}>

<div className="check-out">

<h5>Billing details</h5>


<div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder= "Returning customer? Click here to login"        className="check-out-place "  />
        </div>

        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder= "Have a coupon? Click here to enter your code"        className="check-out-place "  />
        </div>

        <Container>
        <div className="name">
        <Row>
        <Col>
        <div className="first-name">
            <h5>First name</h5>
        <input type="text" required/>

        </div>

        </Col>

        <Col> 
        <div className="first-name">
            <h5>Last name</h5>
        <input type="text" required/>
        </div>
        </Col>
      </Row>
      </div>


      <Row>
        <Col>     
        <div className="company-name">
            <h5>Company name (optional)</h5>
        <input type="text" required/>
        </div>
   
        </Col>
      </Row>


      <Row>
        <Col>     
        <div className="company-name">
            <h5>Country / Region *</h5>

            <div className="card flex justify-content-center">
            < Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country"   
                valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" panelFooterTemplate={panelFooterTemplate} 
                dropdownIcon={(opts) => {
                    return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                }} />
        </div>    
        </div>
   
        </Col>
      </Row>


      <Row>
        <Col>     
        <div className="street">
            <h5>Street address *</h5>
        <input type="text" placeholder="House number and street name lg" required/>
        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" required style={{marginTop:"5%"}}/>

        </div>
        </Col>
      </Row>






      <Row>
        <Col>     
        <div className="company-name">
            <h5>Town / City *</h5>

            <div className="card flex justify-content-center">
            < Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country"   
                valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" panelFooterTemplate={panelFooterTemplate} 
                dropdownIcon={(opts) => {
                    return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                }} />
        </div>    
        </div>
   
        </Col>
      </Row>

      <Row>
        <Col>     
        <div className="company-name">
            <h5>State *</h5>

            <div className="card flex justify-content-center">
            < Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country"   
                valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" panelFooterTemplate={panelFooterTemplate} 
                dropdownIcon={(opts) => {
                    return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                }} />
        </div>    
        </div>
   
        </Col>
      </Row>



      <Row>
        <Col>     
        <div className="company-name">
            <h5>ZIP Code *</h5>
        <input type="password" required/>
        </div>
   
        </Col>
      </Row>
      <Row>
        <Col>     
        <div className="company-name">
            <h5>Phone *</h5>
        <input type="text" required/>
        </div>
   
        </Col>
      </Row>
      <Row>
        <Col>     
        <div className="company-name">
            <h5>Email address *</h5>
        <input type="email" required/>
        </div>
   
        </Col>
      </Row>


      <div className="checkbox">
        
      <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)}  />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>

      </div>


      <Row>
      <Col>
      <div className="notes">
      <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." required/>
      </div>
        </Col>
        </Row>


        
      

    </Container>

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

<Footer/>

    </>
  )
}
