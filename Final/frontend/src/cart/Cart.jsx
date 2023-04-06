import React from "react";
import Header from "../header/Header";
import { Footer } from "../footer/Footer";
import { Banner } from "./Cart-banner";
import { Main } from "./Cart-main";
import {useSelector} from "react-redux";

export function Cart(){
    const cart = useSelector((state) => state.currentCart);

    return(
        <div className="cart">
            <Header></Header>
            <Banner></Banner>
            {cart.cartItems.length === 0 ? (<div className="empty-cart">Cart is empty</div>) : <Main cart={cart}></Main>}
            <Footer></Footer>
        </div>
    );
}