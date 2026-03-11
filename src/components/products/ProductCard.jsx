import { Card, CardContent, CardMedia, Typography, Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { showAlert } from "../../store/alert/alertSlice";
import { cartSelectors, updateCart } from "../../store/cart/cartSlice";
import { incrementQuantity, decrementQuantity, productSelectors } from "../../store/product/productSlice";

import formatPrice from "../../utils/formatPrice";

import SvgButton from "../SvgButton";

const ProductCard = ({ id }) => {
    const product = useSelector(state => productSelectors.selectById(state, id));
    const productAddedToCart = useSelector(state => cartSelectors.selectById(state, id));
    const dispatch = useDispatch();

    const cartHandler = () => {
        dispatch(updateCart(product))
        dispatch(showAlert({
            message: "Carrinho atualizado!",
            severity: "success"
        }));
    }

    return <Card className="product-card"
        elevation={0}>
        <Box className="image-wrapper">
            <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                className="product-image"
            />
        </Box>

        <CardContent className="product-content">
            <Typography className="name">
                {product.name}
            </Typography>

            <Typography className="price">
                {formatPrice(product.price)}
            </Typography>

            <Typography className="payment-description">
                Em até {product.max_installments}x de {formatPrice(product.price / product.max_installments)}
            </Typography>

            {product.cash_discount > 0 && (
                <Typography className="payment-description">
                    {formatPrice(product.price / 100 * (100 - product.cash_discount))} à vista ({product.cash_discount}% de desconto)
                </Typography>
            )}

            <Box className="quantity-container">
                <Box className="quantity-controls">
                    <SvgButton
                        imagem="src/assets/remove-circle-icon.svg"
                        imagemHover="src/assets/remove-circle-icon-hover.svg"
                        onClick={() => dispatch(decrementQuantity(id))}
                    />
                    <TextField
                        className="quantity-field"
                        size="small"
                        disabled
                        value={product.quantity}
                    />
                    <SvgButton
                        imagem="src/assets/add-circle-icon.svg"
                        imagemHover="src/assets/add-circle-icon-hover.svg"
                        onClick={() => dispatch(incrementQuantity(id))}
                    />
                </Box>
                <Button
                    className="add-to-cart-button"
                    fullWidth
                    onClick={() => { cartHandler() }}
                >
                    {!productAddedToCart ? "ADICIONAR" : "ATUALIZAR"}
                </Button>
            </Box>
        </CardContent>
    </Card>
};

export default ProductCard;
