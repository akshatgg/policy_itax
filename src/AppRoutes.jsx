
import './App.css'
import React, {  Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayouts from './layouts/Applayouts';
import Home from './pages/Home';

function AppRoutes() {
const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLayouts/>,
    children:[
      {
        index: true,
        element: <Home/>
       },
      
    ]
  }

])

  return (

  <>
  <RouterProvider router={router} />
  </>
  )
}

export default AppRoutes
