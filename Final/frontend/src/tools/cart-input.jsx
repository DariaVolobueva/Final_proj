import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTotals, removeFromCart, updateCart } from "../redux/cartSlice";

export function CartInput(props){
    const value = props.item;
    const [cartInput, setCartInput] = useState(value.amount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
        dispatch(updateCart({
            type: "update",
            foodName: props.item.foodName, 
            amount: parseInt(cartInput)}));
    }, [cartInput, dispatch])

    function handleRemoveFromCart(cartItem){
        dispatch(removeFromCart(cartItem));
    } 

    function handleChangeCart(e){
        setCartInput(e.target.value);
    }

    return(<>
        <label>Quantity :</label>
        <input type="number" min={1} defaultValue={cartInput} onChange={(e) => handleChangeCart(e)} required/>
        <button onClick={() => handleRemoveFromCart(value)}>X</button>
    </>
    );
}