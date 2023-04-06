import React, { useEffect, useState } from "react";
import { renderPrice} from "../tools/tools";
import { CartInput } from "../tools/cart-input";
import { useDispatch } from "react-redux";
import { getTotals } from "../redux/cartSlice";
import { CartForm } from "./cart-form";

export function Main(props){
    const cart = props.cart.cartItems;
    const dispatch = useDispatch();
    const [form, setForm] = useState(false);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch])

    return(
        <div className="cart-main cart-main_position">
            <div>
                    {cart.map((value) =>{
                            return(
                            <div key={value.foodName} className="cart-main__product">
                                <div className="cart-main__product-info">
                                    <img src={value.foodImage} alt="" />
                                    <div className="cart-main__product-name">
                                        <p>{value.foodName}</p>
                                        {renderPrice(value.foodDiscount, value.foodPrice, "cart-main")}
                                    </div>
                                </div>
                                
                                <div className="cart-main__quantity">
                                    <CartInput
                                    item = {value}
                                    ></CartInput>
                                </div>
                            </div>
                        );  
                        })}
            </div>
            <div className="cart-main__final-price">
                <p>Total Cost: {(props.cart.cartTotalAmount).toFixed(2)}$</p>
                <p>Discount: {(props.cart.cartTotalDiscount).toFixed(2)}$</p>
            </div>
            {form ? <CartForm
                productArray = {cart}></CartForm> : ""}
            {form ? "" : <button className="default-button button-blue" onClick={() => setForm(!form)}>To order<div></div> </button>}
        </div>
    );
}