import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axiosInstance";
import { endpoints } from "../../api/endpoints";
import type { IproductState } from "../../types/reduxTypes/redux.types";

const initialState:IproductState = {
    products:[],
    status:"idle"
}

export const fetchProducts = createAsyncThunk("products/fetch",async()=>{
    const res = await api.get(endpoints.products);
    return res.data
})

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        //pending
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status = "pending";
            state.products = []
        }),

        //fullfilled
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            console.log(action.payload);
             state.status = "idle";
             state.products = action.payload;
        }),

        //rejected

        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.status = "rejected";
            // state.error = action.payload
            state.products = [];
        })
    }
})


export default productSlice.reducer;