import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { showAlert } from "./store/alert/alertSlice";
import { loadProducts } from "./store/product/productSlice";

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
    </>
}

export default App
