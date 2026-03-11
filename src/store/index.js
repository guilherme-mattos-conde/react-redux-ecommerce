import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./alert/alertSlice"
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice"
import productReducer from "./product/productSlice";
import { reducer as formReducer } from "redux-form";

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        cart: cartReducer,
        order: orderReducer,
        product: productReducer,
        form: formReducer
    }
});

store.subscribe(() => {
    const orders = store.getState().order.entities;
    localStorage.setItem("orders", JSON.stringify(orders));
});

export default store;
