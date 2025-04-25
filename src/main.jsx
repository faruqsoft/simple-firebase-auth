import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from "./Layouts/Root.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        component:Root,
        children: [

        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
