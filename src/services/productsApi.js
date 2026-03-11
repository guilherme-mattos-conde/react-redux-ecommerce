export const getProducts = async () => {
    const response = await fetch(
        "https://gist.githubusercontent.com/guilherme-mattos-conde/9b67981a0c701f4afb97a0726531d72d/raw/b749d0f27e68705aa4f2a1786a125c87ae971aed/products.json"
    );

    return response.json();
};
