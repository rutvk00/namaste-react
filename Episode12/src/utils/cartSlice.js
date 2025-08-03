import { createSlice } from "@reduxjs/toolkit";
import ItemList from "../components/ItemList";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []        
    },
    reducers : {
        prepare(item) {
            return { payload: { ...item, uid: crypto.randomUUID() } };
        },
        addItem : (state , action) => {
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        },
    },
});


export const { addItem , removeItem , clearCart } = cartSlice.actions;

export default cartSlice.reducer; 