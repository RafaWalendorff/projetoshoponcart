import * as types from './types';
import * as productService from '../services/productService';
import * as cartService from '../services/cartService'

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
);

export const openModalAction = (id) => ({
    type: types.openModalType,
    payload: id
});

export const closeModalAction = () => ({
    type: types.closeModalType
});

//-----------------

export const addItemToCartInitAction = () => ({
    type: types.addItemToCartInitType,
});

export const addItemToCartSuccessAction = (cart) => ({
    type: types.addItemToCartSuccessType,
    payload: cart
});

export const addItemToCartAction = async (dispatch, product, quantity = 1) => {
    dispatch(addItemToCartInitAction());

    await sleep(1000);

    await cartService.addItemToCart(product, quantity);

    const cart = await cartService.getCart();
    dispatch(addItemToCartSuccessAction(cart));
}

//-------------------

export const removeItemFromCartInitAction = () => ({
    type: types.removeItemFromCartInitType
});

export const removeItemFromCartSuccessAction = (cart) => ({
    type: types.removeItemFromCartSuccessType,
    payload: cart
});

export const removeItemFromCartAction = async (dispatch, productId) => {
    dispatch(removeItemFromCartInitAction());
    await sleep(1000);
    await cartService.removeItemFromCart(productId);
    const updatedCart = await cartService.getCart();
    dispatch(removeItemFromCartSuccessAction(updatedCart));
}
//-------------------

export const fetchCartItemsInitAction = () => ({
    type: types.fetchCartItemsInitType
});

export const fetchCartItemsSuccessAction = (cart) => ({
    type: types.fetchCartItemsSuccessType,
    payload: cart
});

export const fetchCartItemsAction = async (dispatch) => {
    dispatch(fetchCartItemsInitAction())
    await sleep(1000);
    const cart = await cartService.getCart();
    dispatch(fetchCartItemsSuccessAction(cart));
};

//------------------

export const updateItemInCartInitAction = () => ({
    type: types.fetchCartItemsInitType
});

export const updateItemInCartSuccessAction = (cart) => ({
    type: types.fetchCartItemsSuccessType,
    payload: cart
});

export const updateItemInCartAction = async (dispatch,  productId, amount) => {
    dispatch(updateItemInCartInitAction());
    await sleep(1000);
    await cartService.updateItemInCart(productId, amount);
    const updatedCart = await cartService.getCart();
    dispatch(updateItemInCartSuccessAction(updatedCart));
}


//------------------

export const fetchStoreItemsInitAction = () => ({
    type: types.fetchStoreItemsInitType
});

export const fetchStoreItemsSuccessAction = items => ({
    type: types.fetchStoreItemsSuccessType,
    payload: items
});

export const fetchStoreItemsAction = async (dispatch) => {
    dispatch(fetchStoreItemsInitAction());
    const products = await productService.getProducts();
    dispatch(fetchStoreItemsSuccessAction(products));
};
