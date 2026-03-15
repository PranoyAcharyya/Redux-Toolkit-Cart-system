import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productlistSlice";
import cartReducer from "../slices/cartSlice";




const rootReducer = combineReducers({
    products:productReducer,
    cart:cartReducer
});

export const store = configureStore({
    reducer:rootReducer
})

store.subscribe(()=>{
    const state = store.getState();
    localStorage.setItem("cart",JSON.stringify(state.cart.cartItems));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;

