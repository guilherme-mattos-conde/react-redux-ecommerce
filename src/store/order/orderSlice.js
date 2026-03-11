import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const orderAdapter = createEntityAdapter();

const stored = JSON.parse(localStorage.getItem("orders")) || [];
const initialState = orderAdapter.setAll(orderAdapter.getInitialState(), stored);

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: orderAdapter.addOne,
    }
});

export const orderSelectors = orderAdapter.getSelectors(state => state.order);
export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
