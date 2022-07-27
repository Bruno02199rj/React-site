import React from "react";
import {
  BrowserRouter as Router,
    Routes,
  Route
 
} from "react-router-dom";
import App from "./App";
import { Explore } from "./pages/Explore";
import { Home } from "./pages/Home";

export function AppRoutes(){
    return(
        <Router>
           <Routes>
           <Route path="/" element={<Home/>} />
            <Route path="/Explore" element={<Explore/>} />
           </Routes>
        </Router>
    )
}