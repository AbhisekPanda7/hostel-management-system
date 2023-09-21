import React from "react"
// import kiit from "../images/KIIT-logo-HD.png"
import Hostel from "../images/hostel1.jpg"

export default function header(){
    return (
        <>
            <div className="header-content">
                <img className="Img" src={Hostel}/>
                <h1 className="header-con">HOSTEL MANEGEMENT SYSTEM</h1>
            </div>
            <div className="log-in">
                <button>Log In</button>
            </div>
            <footer className="">
                <h4 className="f">© 2023 KIIT Swapper™. All Rights Reserved.</h4>
            </footer>
     </>        
    )
}