import React from 'react';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    userEmail: "",
    prod: [{id: 1, amount: 3}],
    genPrice: 0
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
            state.prod += action.payload
        }, setEmail(state, action) {
            state.userEmail = action.payload
        }
    }
})
export default basketStore.reducer;