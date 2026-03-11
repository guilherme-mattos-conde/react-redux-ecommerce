import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../../styles/checkout/order-not-found.css"

const OrderNotFound = () => {
    const navigate = useNavigate();

    return <Card className="order-not-found">
        <CardContent>
            <Typography className="title">
                Pedido não encontrado!
            </Typography>
        </CardContent>

        <CardMedia
            component="img"
            image="src/assets/order-not-found.png"
            className="image"
            sx={{ width: 200 }}
        />

        <Button className="button" variant="contained" onClick={() => navigate("/produtos")}>
            INICIAR COMPRA
        </Button>
    </Card>
};

export default OrderNotFound;
