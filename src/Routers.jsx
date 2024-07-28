import { createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const Routers = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
    }, 
    {
        path:"/shop",
        element: <Shop/>,
    }, 
    {
        path:"/cart",
        element: <Cart/>,
    }, 
    {
        path:"/checkout",
        element: <Checkout/>,
    }, 
    {
        path:"/login",
        element: <Login/>,
    }, 

    {
        path:"/register",
        element: <Register/>,
    }, 





])
export default Routers;