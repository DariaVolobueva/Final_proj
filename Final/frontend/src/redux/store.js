import {configureStore} from "@reduxjs/toolkit";
import currentCart from "./cartSlice";

export const store = configureStore({
    reducer:{
        currentCart: currentCart
    }
});