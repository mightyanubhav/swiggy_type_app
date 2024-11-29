import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // actions
        addItems: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItems: (state) =>{
            state.pop();
        },
        clearCart: (state)=>{
            state.items.length = 0;
        }
    }
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;