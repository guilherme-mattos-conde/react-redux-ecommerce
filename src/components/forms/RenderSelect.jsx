import TextField from "@mui/material/TextField";

const RenderSelect = ({ input, meta, children, ...custom }) => {
    const error = meta.touched && meta.error;
    const isSelect = input.value == "select";

    return (
        <TextField
            {...input}
            {...custom}
            select
            fullWidth
            error={!!error}
            helperText={error ? meta.error : ""}
            variant="outlined"
            slotProps={{inputLabel: { shrink: true }}}
            sx={{
                "& .MuiSelect-select": {
                    color: isSelect ? "#aaa" : "inherit",
                },
            }}
        >
            {children}
        </TextField>
    );
};

export default RenderSelect;
