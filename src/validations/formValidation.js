const formValidation = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "Campo obrigatório";
    }

    if (!values.email) {
        errors.email = "Campo obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email inválido";
    }

    if (!values.sex) {
        errors.sex = "Campo obrigatório";
    } else if (values.sex === "select") {
        errors.sex = "Campo obrigatório";
    }

    return errors;
};

export default formValidation;
