import React from "react";
import "./style.css"
import Header from "./Header"
import Main from "./Main";



export default function App(){
    return(
        <div className="main-container">
            <div className="container">
            <Header />
            <Main />
            </div>
        </div>
    )
}