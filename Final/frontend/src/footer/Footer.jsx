import React from "react";
import { Copyright } from "./Footer-copyright";
import { Main } from "./Footer-main";

export function Footer(){
    return(
        <footer className="footer footer_position">
            <Main></Main>
            <Copyright></Copyright>
        </footer>
    );
}