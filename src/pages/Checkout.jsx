import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { orderSelectors } from "../store/order/orderSlice";

import CardCheckout from "../components/checkout/CardCheckout";
import OrderNotFound from "../components/checkout/OrderNotFound";

import "../styles/checkout/main.css"

const Checkout = () => {
    const [searchParams] = useSearchParams();
    const id = Number(searchParams.get("id"));

    const order = useSelector(state => orderSelectors.selectById(state, id));

    return <div className="checkout-container">
        {order ? <CardCheckout order={order} /> : <OrderNotFound />}
    </div>
};

export default Checkout;
