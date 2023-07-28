export const addItemToCart = async (product, quantity = 1) => {
    try {
        let cart = await getCart();

        console.log('Cart:', cart);
        console.log('Product:', product);

        const existingProductIndex = cart.findIndex(p => p.id === product.id);

        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart = [...cart, { ...product, quantity: quantity }];
        }

        await saveCart(cart);
    } catch (error) {
        console.error('Erro ao adicionar item ao carrinho:', error);
        throw error;
    }
}

export const removeItemFromCart = async (itemId) => {
    try {
        const cart = await getCart();
        const updatedCart = cart.filter(item => item.id !== itemId);
        await saveCart(updatedCart);
    } catch (error) {
        console.error('Erro ao remover item do carrinho:', error);
        throw error;
    }
}

export const saveCart = async (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Erro ao salvar carrinho:', error);
        throw error;
    }
}

export const updateItemInCart = async (productId, quantity) => {
    let cart = await getCart();
    const productIndex = cart.findIndex(item => item.id === productId);
    console.log('Product index:', productIndex);
    if (productIndex !== -1) {
        console.log(`atualizando o produto${productId}`);
        cart[productIndex].quantity += quantity;
        saveCart(cart);
    }

    return cart;
}

export const getCart = async () => {
    try {
        return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
        console.error('Erro ao obter carrinho:', error);
        throw error;
    }
}
