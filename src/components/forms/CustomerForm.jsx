import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

import { Field, reduxForm } from "redux-form";

import { showAlert } from "../../store/alert/alertSlice";
import { cartSelectors, clearCart } from "../../store/cart/cartSlice";
import { addOrder } from "../../store/order/orderSlice";
import { resetQuantities } from "../../store/product/productSlice";

import { formValidation } from "../../validations/formValidation";
import formatPrice from "../../utils/formatPrice";

import RenderInput from "./RenderInput";
import RenderSelect from "./RenderSelect";

const CustomerForm = ({ handleSubmit }) => {
    const cart = useSelector(state => cartSelectors.selectAll(state));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let totalPrice = 0;

    cart.forEach(product => {
        totalPrice += product.price * product.quantity
    });

    const submit = (values) => {
        if (cart.length === 0) {
            dispatch(showAlert({
                message: "Carrinho vazio!",
                severity: "error"
            }))
            return;
        }
        
        const order = {
            id: Date.now(),
            customer: values,
            items: cart,
            date: new Date().toISOString()
        };

        dispatch(addOrder(order));
        dispatch(clearCart());
        dispatch(resetQuantities());
        dispatch({ type: "redux-form/RESET", meta: { form: "customer" } });
        
        navigate(`/pedido-finalizado?id=${order.id}`);
    };

    return (
        <Box
            component="form"
            className="customer-form"
            onSubmit={handleSubmit(submit)}
        >

            <div className="form-components">
                <div className="inputs">
                    <Field
                        name="name"
                        component={RenderInput}
                        className="input"
                        label="Nome"
                        placeholder="Nome do cliente"
                    />

                    <Field
                        name="email"
                        component={RenderInput}
                        className="input"
                        type="email"
                        label="Email"
                        placeholder="Digite seu email"
                    />
                </div>

                <div className="div-select">
                    <Field
                        name="sex"
                        component={RenderSelect}
                        className="select"
                        label="Sexo"
                    >
                        <MenuItem value="select" sx={{ display: "none" }}>
                            Selecione
                        </MenuItem>
                        <MenuItem value="masculino">Masculino</MenuItem>
                        <MenuItem value="feminino">Feminino</MenuItem>
                        <MenuItem value="outro">Outro</MenuItem>
                    </Field>
                </div>
            </div>

            <div className="summary">
                <h2 className="total-price">Total: {formatPrice(totalPrice)}</h2>

                <Button
                    type="submit"
                    variant="contained"
                    className="button"
                >
                    FINALIZAR COMPRA
                </Button>
            </div>
        </Box>
    );
};

export default reduxForm({
    form: "customer",
    validate: formValidation,
    initialValues: {
        sex: "select"
    },
    onSubmitFail: (errors, dispatch) => {
        if (errors) {
            dispatch(showAlert({
                message: "Preencha todos os campos corretamente!",
                severity: "error"
            }));
        }
    }
})(CustomerForm);
