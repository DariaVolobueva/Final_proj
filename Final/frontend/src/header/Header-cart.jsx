import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../redux/cartSlice";
export function Cart(){
    const cartTotalQuantity = useSelector((state) => state.currentCart.cartTotalQuantity);
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.currentCart);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch])
    

    return(
        <Link to="/cart">
            <div className="header__cart">
                <button><div></div></button>
                <p>Cart ({cartTotalQuantity})</p>
            </div>
        </Link>
        
    );
}