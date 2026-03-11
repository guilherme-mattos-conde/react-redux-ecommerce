import TextField from "@mui/material/TextField";

const RenderInput = ({ input, meta, ...custom }) => {
    const error = meta.touched && meta.error;

    return (
        <TextField
            {...input}
            {...custom}
            fullWidth
            error={!!error}
            helperText={error ? meta.error : ""}
            variant="outlined"
            slotProps={{
                inputLabel: { shrink: true },
                htmlInput: { maxLength: 50 }
            }}
        />
    );
};

export default RenderInput;
