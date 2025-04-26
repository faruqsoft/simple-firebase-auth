import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from "./Layouts/Root.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        children: [
            { index:true,
            Component:Home
            },
            {
                path:'Login',
                Component:Login
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
