import React from "react"

export default function Navbar(props){
    return(
        <div>
            <div>
            <nav>
                <img src={`./images/${props.img}`} alt="yu" className="nav-img"/>
                <h3>{props.title}</h3>
            </nav>
        </div>
        </div>
    )
}