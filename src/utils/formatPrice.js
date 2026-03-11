const formatPrice = (value) => {
    const formattedText = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);

    return formattedText;
}

export default formatPrice;
