import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import formatPrice from "../../utils/formatPrice";

const CardCheckout = ({ order }) => {
    const navigate = useNavigate();

    const totalPrice = order.items.reduce((acc, p) => acc + p.price * p.quantity, 0);

    return <Card className="checkout-card">
        <CardContent className="texts">
            <Typography className="name">
                {order.customer.name},
            </Typography>

            <Typography className="text">
                Sua compra no valor <span>{formatPrice(totalPrice)}</span><br />
                foi finalizada com sucesso
            </Typography>
        </CardContent>

        <CardMedia
            component="img"
            image="src/assets/order-confirmed.png"
            className="image"
            sx={{ width: 200 }}
        />

        <Button className="button" variant="contained" onClick={() => navigate("/produtos")}>
            INICIAR NOVA COMPRA
        </Button>
    </Card>
};

export default CardCheckout;
