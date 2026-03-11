import { useSelector } from "react-redux";

import { productSelectors } from "../../store/product/productSlice";

import ProductCard from "./ProductCard";

const ProductsList = () => {
    const products = useSelector(state => productSelectors.selectAll(state));

    return <>
        <h1 className="titulo">Produtos</h1>

        <ul className="products-list">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard id={product.id} />
                </li>
            ))}
        </ul>
    </>
}

export default ProductsList;
