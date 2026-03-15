import { createSlice } from "@reduxjs/toolkit";
import type { Icartstate } from "../../types/reduxTypes/redux.types";


const loadcart = () => {
    try {
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
}


const initialState: Icartstate = {
  cartItems:loadcart(),
  discount:false,
  total:0,
  discountMoney:200
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const exisistingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (exisistingItem) {
        exisistingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const exisistingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (exisistingItem) {
        exisistingItem.quantity -= 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removecart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload.id,
      );
    },
  },
});

export const selectCartSummary = (state: any) => {
  const total = state.cart.cartItems.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  const discountedTotal =
    total > state.cart.discountMoney
      ? total - total * 0.4
      : total;

  return { total, discountedTotal };
};


export const { addtocart, removecart ,increaseQuantity,decreaseQuantity} = cartSlice.actions;

export default cartSlice.reducer;
