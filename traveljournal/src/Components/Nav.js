import React from "react";

export default function Nav(props) {
    console.log(props.img)
    return(
        <nav className= "nav-bar"> 
            <img className= "logo"src={props.img}></img>
            <p className="nav-title">my travel journal</p>
        </nav>
    )
}