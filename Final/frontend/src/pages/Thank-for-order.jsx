import React from "react";
import Header from "../header/Header";
import { Footer } from "../footer/Footer";

export function Thanks(){
    return(<>
        <Header></Header>
        <div className="order">
            <p>Thank you for your order</p>
            <div></div>
        </div>
        <Footer></Footer>
    </>   
    );
}