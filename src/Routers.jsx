import { createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main";

const Routers = createBrowserRouter([
    {
        path:"/",
        element: <Main/>,
    }, 

])
export default Routers;