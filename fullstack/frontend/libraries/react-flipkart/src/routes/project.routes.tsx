import { Outlet } from "react-router-dom";
import { Login } from "../pages/project/login/Login.page";
import { Register } from "../pages/project/register/Register.page";
import { Home } from "../pages/project/home/Home.page";

export const allProjectRoutes={
    path:'/project',
    element:<><Outlet/></>,
    children:[
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        },
        {
            path:'home',
            element:<Home/>
        }
    ]
}