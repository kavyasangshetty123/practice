import { Outlet } from "react-router-dom";
import { MyProps } from "../pages/lessons/props/MyProps";
import { H1 } from "../pages/lessons/elements/H1";
import { Lessons } from "../pages/lessons/Lessons.page";
import { Entrypoint } from "../pages/Entrypoint.page";

export let myEntryPointList={
    path:'/',
    element:<> <Outlet/></>,
    children:[
        {
            path:'entry',
            element:<Entrypoint/>
        }
    ]
}