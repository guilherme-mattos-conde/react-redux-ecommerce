import ProductsList from "../components/products/ProductsList"
import CustomerData from "../components/forms/CustomerData";

import "../styles/products/main.css"

const Products = () => {

    return <div className="products-container">
        <ProductsList />
        <CustomerData />
    </div>
}

export default Products;
