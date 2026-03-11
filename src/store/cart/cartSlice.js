import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCart: (state, action) => {
            const product = {
                ...action.payload,
                quantity: Number(action.payload.quantity),
                price: Number(action.payload.price)
            }

            const existing = state.entities[product.id];

            if (product.quantity === 0) {
                if (existing) {
                    cartAdapter.removeOne(state, product.id);
                }
                return;
            }

            if (existing) {
                existing.quantity = product.quantity;
            } else {
                cartAdapter.addOne(state, product);
            }
        },
        clearCart: (state) => {
            cartAdapter.removeAll(state);
        }
    }
});

export const cartSelectors = cartAdapter.getSelectors(state => state.cart);
export const { updateCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
