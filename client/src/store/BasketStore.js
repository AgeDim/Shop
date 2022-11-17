import React from 'react';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    userEmail: "",
    prod: [],
    genPrice: 0
}
 export const addProducts = (id, amount)=>{
     let pr = {id:id,amount:amount}
     console.log(pr)
     // tmp.push(pr)
     addProduct(pr)
 }

// export const getGenPrice = () => {
//     let price = 0
//     if (initialState.prod.length === 0) {
//         return 0;
//     } else {
//         initialState.prod.map(pr => {
//             let pro = selectProduct(pr.id)
//             price += (pr.amount * pro.price)
//         })
//         return price
//     }
// }


const basketStore = createSlice({
    name: "basket", initialState, reducers: {
        addProduct(state, action) {
            state.prod.push(action.payload)
            console.log(state.prod)
        }, setEmail(state, action) {
            state.userEmail = action.payload
        }
    }
})
export const { addProduct,setEmail} = basketStore.actions
export default basketStore.reducer;