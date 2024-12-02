import React from "react";
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import JobPage from "./Pages/JobPage";


const Router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/"  element ={<MainLayout/>} >
    <Route index element={<HomePage />} />
    <Route path="/jobs" element={<JobPage />} /> 
    </Route>

    
  )
)

const App = () => {
  return <RouterProvider router={Router}/>;
};

export default App;
