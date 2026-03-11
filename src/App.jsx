import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { showAlert } from "./store/alert/alertSlice";
import { loadProducts } from "./store/product/productSlice";

import { getProducts } from "./services/productsApi";

import AlertSnackbar from "./components/AlertSnackbar";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                dispatch(loadProducts(products));
            } catch (error) {
                dispatch(showAlert({
                    message: "Erro ao carregar produtos!",
                    severity: "error"
                }));
            }
        }

        fetchProducts();
    }, [dispatch]);

    return <>
        <Router>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/pedido-finalizado" element={<Checkout />} />
            </Routes>
        </Router>
        <AlertSnackbar />
    </>
}

export default App
