import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartTotalDiscount: 0 
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
      addToCart: (state, action) =>{
        const itemIndex =  state.cartItems.findIndex((item) => item.foodName === action.payload.foodName);

        if(itemIndex >= 0){
            state.cartItems[itemIndex].cartQuantity += 1;
            state.cartItems[itemIndex].amount += action.payload.amount;
        } else{
            const tempProduct = {...action.payload, cartQuantity: 1}

            state.cartItems.push(tempProduct);
        }

      },
      removeFromCart: (state, action) =>{
        const nextCartItems = state.cartItems.filter(
            cartItem => cartItem.foodName !== action.payload.foodName
        )
        state.cartTotalQuantity = 0;

        state.cartItems = nextCartItems;
      },
      updateCart: (state, action) =>{
        const itemIndex =  state.cartItems.findIndex((item) => item.foodName === action.payload.foodName);
        if(action.payload.amount > 0 && !isNaN(action.payload.amount)){
            state.cartItems[itemIndex].amount = action.payload.amount;
        } else{
            state.cartItems[itemIndex].amount = 0;
        }
        
      },
      getTotals: (state, action) =>{
            let {totalCost, totalDiscount, quantity} =  state.cartItems.reduce((cartTotal, cartItem) => {
            const {foodPrice, foodDiscount, amount} = cartItem;
            const itemTotal = ((foodPrice) - (foodDiscount)) * parseInt(amount);
            const itemTotalDiscount = (foodDiscount) * parseInt(amount);

            cartTotal.totalCost += itemTotal;
            cartTotal.totalDiscount += itemTotalDiscount;
            cartTotal.quantity += amount;

            return cartTotal;
        }, {
            totalCost: 0,
            totalDiscount: 0,
            quantity: 0
        }) 

        state.cartTotalAmount = totalCost;
        state.cartTotalDiscount = totalDiscount;
        state.cartTotalQuantity = quantity;
        return state;
        
      }
      
    }
  });
  
  export const { addToCart, removeFromCart, getTotals, updateCart } = cartSlice.actions;
  
  export default cartSlice.reducer;