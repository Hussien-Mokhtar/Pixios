import "./Register.css"
import "./Login.css"
import Navbaar from "../Component/Navbar";
import log from "../Pixio/log.png"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button";
import Form from 'react-bootstrap/Form';
import Footer from "../Component/Footer";

export default function Register() {
  return (
    <>

<Navbaar />

<div className="login">
  <div className="login-left">
    <h1 style={{ fontSize: "45px", fontWeight: "700" }}>My Account </h1>
    <h5 className="home-link"> <Link to="/" > <span >Home</span> </Link> <IoIosArrowForward className="inside-icon" /> My Account</h5>

    <div className="log-img">
      <img src={log} alt="" />

    </div>
  </div>


  <div className="login-right">

    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3"><h1 >Registration Now</h1></div>
          <span className="text-600 font-medium line-height-3">welcome please login to your account</span>
        </div>

        <div>
        <label htmlFor="email" className=" block text-900 font-medium mb-2" ><h5 >Username</h5></label>
          <InputText id="email" type="text" placeholder="Email address" className=" w-full mb-3" style={{ backgroundColor: "white" }} required />

          <label htmlFor="email" className=" block text-900 font-medium mb-2" ><h5 >Email Adress</h5></label>
          <InputText id="email" type="text" placeholder="Email address" className=" w-full mb-3" style={{ backgroundColor: "white" }} required />

          <label htmlFor="password" className="block text-900 font-medium mb-2"> <h5>Password</h5></label>
          <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" style={{ backgroundColor: "white" }} required />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">

              <Form className="forgot">
                {['checkbox'].map((type) => (
                  <div key={`rememberme`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`rememberme`}
                      label={`Remember Me`}
                    />
                  </div>
                ))}
              </Form>



            </div>
          </div>

          <div className="sign">
          <Button  className=" w-full signin" > <Link to="/login" className="in">SIGN IN</Link> </Button>
                  <Button  className=" w-full signin" > <Link to="/register" className="in">REGISTER</Link></Button>

          </div>
        </div>
      </div>
    </div>

  </div>

</div>

<div className="fot">
<Footer/>
</div>

      
    </>
  )
}
