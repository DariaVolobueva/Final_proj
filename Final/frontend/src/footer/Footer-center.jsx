import React from "react";
import Logo from "../header/Header-logo";

export function Center(){
    return(
        <div className="footer-center footer-center_position">
            <Logo></Logo>
            <div className="footer-center__text">Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing </div>
            <div className="links">
                <a className="links__instagram" href=" "></a>
                <a className="links__facebook" href=" "></a>
                <a className="links__twitter" href=" "></a>
                <a className="links__pinterest" href=" "></a>
            </div>
        </div>
    );
}