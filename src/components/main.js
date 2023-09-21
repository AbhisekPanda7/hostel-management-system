import React from "react"
import ReactDOM from "react-dom"
import kiit from "../images/KIIT-logo-HD.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Main(){
    
    // const navigate = useNavigate();
    return (
        

        <nav className="main--content">
            <img className="kiit-logo" src={kiit}/>
            {/* <button onClick={() => navigate("./pages/Home")}><h1 className="main--head text-red-500" >Home</h1>Go to Home</button> */}
            <a href="/"><h1 className="main--head">Home</h1></a>
           <a href="/contact"><h1 className="main--head">Contact</h1></a>
           <a href="/hostels"><h1 className="main--head">Hostels</h1></a>
           <a href="/about"><h1 className="main--head">About</h1></a>
        </nav>
             
    )
}