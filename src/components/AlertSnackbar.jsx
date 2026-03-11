import { Snackbar, Alert } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "../store/alertSlice";

const AlertSnackbar = () => {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    return <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={() => dispatch(hideAlert())}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
        <Alert
            className="alert"
            variant="filled"
            severity={alert.severity}
            onClose={() => dispatch(hideAlert())}
        >
            {alert.message}
        </Alert>
    </Snackbar>
}

export default AlertSnackbar;
