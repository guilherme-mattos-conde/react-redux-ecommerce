import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter();

const initialState = productAdapter.getInitialState();

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadProducts: (state, action) => {
            productAdapter.setAll(state, action.payload);
        },
        incrementQuantity: (state, action) => {
            const id = action.payload;
            const product = state.entities[id];

            if (product) {
                product.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const id = action.payload;
            const product = state.entities[id];

            if (product) {
                product.quantity == 0 ? product.quantity = 0 : product.quantity -= 1;
            }
        },
        resetQuantities: (state) => {
            Object.values(state.entities).forEach(product => {
                product.quantity = 0;
            });
        }
    }
})

export const productSelectors = productAdapter.getSelectors(state => state.product);
export const { loadProducts, incrementQuantity, decrementQuantity, resetQuantities } = productSlice.actions;
export default productSlice.reducer;
