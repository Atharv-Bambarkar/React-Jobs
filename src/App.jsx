import React from "react";
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";


const Router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/"  element ={<MainLayout/>} children={<Route index element={<HomePage/>}/>}/>
  )
)

const App = () => {
  return <RouterProvider router={Router}/>;
};

export default App;
