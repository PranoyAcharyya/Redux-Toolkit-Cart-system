import type { Iproduct } from "../interfaces/product.interface";

export type Status = "idle" | "pending" | "rejected";

export interface IproductState {
    products:Iproduct[],
    status:Status
}

export interface Icartstate {
    cartItems :Iproduct[],
    discount:boolean,
    total:number,
    discountMoney:number
}