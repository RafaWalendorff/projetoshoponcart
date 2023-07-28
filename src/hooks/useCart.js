import { useState, useEffect } from "react";
import { useAppContext } from "../store/AppContext";
import { addItemToCartAction, removeItemFromCartAction, fetchCartItemsAction, updateItemInCartAction } from "../store/actions";


export const useCart = () => {
    const { state, dispatch } = useAppContext();
    const cart = state.cart;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchCartItemsAction(dispatch);
    }, []);

    const addProduct = async (product, quantity = 1) => {
        console.log("Iniciando o processo de adicionar produto ao carrinho");
        setIsLoading(true);
        await addItemToCartAction(dispatch, product, quantity);
        console.log("Produto adicionado ao carrinho com sucesso");
        setIsLoading(false);
    };

    const removeProduct = async (productId) => {
        setIsLoading(true);
        await removeItemFromCartAction(dispatch, productId);
        setIsLoading(false);
    };

    const updateProductAmount = async (productId, amount) => {
        setIsLoading(true);
        await updateItemInCartAction(dispatch, productId, amount);
        setIsLoading(false);
    }

    return { cart, addProduct, removeProduct, updateProductAmount, isLoading };
};