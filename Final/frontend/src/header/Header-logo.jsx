import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <div className="logo">
                <div></div>
                <p>Organick</p>
            </div>
        </Link>
    
    );
  }
  
  export default Logo;