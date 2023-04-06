import React from "react";
import { ContactUs } from "./Footer-contact-us";
import { Center } from "./Footer-center";
import { UtilityPages } from "./Footer-utility-pages";

export function Main(){
    return(
        <div className="footer-main footer-main_position">
            <ContactUs></ContactUs>
            <Center></Center>
            <UtilityPages></UtilityPages>
        </div>
    );
}