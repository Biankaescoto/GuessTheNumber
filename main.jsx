import ReactDOM from "react-dom/client";
import React from 'react'
import './style.scss'
import Landing from "../my-app/routes/landing/landing"
import Reverse from "../my-app/routes/Reverse/reverse"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",  
    element: <Landing />,
  },
  {
    path: "/reverse",
    element: <Reverse />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

