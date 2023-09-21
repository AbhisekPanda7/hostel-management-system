import React from "react"
import Style from "./style.css"
import Main from "./components/main"
import Header from "./components/header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Hostel from "./pages/Hostel"
import About from "./pages/About"
import Nopage from "./pages/Nopage";

export default function App(){

    return(
        
        <div>
            <Main />
            <Header />
            
            
            </div>
            )

}