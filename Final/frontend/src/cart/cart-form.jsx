import React, {useNavigate } from "react";
import Axios from "axios";

export function CartForm(props){
    const navigate = useNavigate();

    function addToCart(e){
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        navigate("/thanks");

        Axios.post('http://localhost:3001/insert',{
            productArray: props.productArray,
            personalData: formJson
        });
    }

    return(
        <form className="cart-form cart-form_position" onSubmit={addToCart}>
            <label className="cart-form__label-name">Full Name*</label>
            <input type="text" className="cart-form__name" placeholder="Your Full Address" name="fullName" autoComplete="username" required/>
            <label className="cart-form__label-email">Your Email*</label>
            <input type="email" className="cart-form__email" placeholder="example@yourmail.com" name="email" autoComplete="email" required/>
            <label className="cart-form__label-address">Address*</label>
            <input type="text" className="cart-form__address" placeholder="Your Address" name="address" autoComplete="street-address" required/>
            <label className="cart-form__label-number">Phone number*</label>
            <input type="tel" className="cart-form__number" placeholder="Your Phone Number" name="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" autoComplete="tel-national" required/>
            <label className="cart-form__label-message">Message</label>
            <textarea type="textarea" className="cart-form__message" name="message" placeholder="Some Extra Information"/>

            <button type="submit" className="default-button button-blue">Confirm</button>
        </form>
    );
}