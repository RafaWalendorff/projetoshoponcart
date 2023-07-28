import * as types from './types';

export function reducer(state, action) {
    console.log('acão reducer:', action.type, action.payload);
    switch (action.type) {
        case types.openModalType:
            return {
                ...state,
                type: types.openModalType,
                modalOpen: true,
                activeItemId: action.payload
            };

        case types.closeModalType:
            return {
                ...state,
                modalOpen: false
            };

        case types.fetchStoreItemsInitType:
            return {
                ...state,
                type: types.fetchStoreItemsInitType,
            };

        case types.fetchStoreItemsSuccessType:
            return {
                ...state,
                type: types.fetchStoreItemsSuccessType,
                products: action.payload
            };

        case types.addItemToCartType: {
            // Verifique se o item já está no carrinho
            const existingCartItem = state.cart.find(item => item.id === action.payload.id);

            // Se o item já existe no carrinho, atualize a quantidade
            if (existingCartItem) {
                return {
                    ...state,
                    type: types.addItemToCartSuccessType,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                    ),
                };
            }

            // Se o item não está no carrinho, adicione ao carrinho
            else {
                return {
                    ...state,
                    type: types.addItemToCartSuccessType,
                    cart: [...state.cart, action.payload],
                };
            }
        }

        case types.removeItemFromCartType: {
            // Filtre o item do carrinho
            const updatedCart = state.cart.filter(item => item.id !== action.payload.id);

            return {
                ...state,
                type: types.removeItemFromCartSuccessType,
                cart: updatedCart
            };
        }


        case types.addItemToCartSuccessType:
        case types.removeItemFromCartSuccessType:
        case types.fetchCartItemsSuccessType: {
            console.log('Updated cart:', action.payload);
            return {
                ...state,
                type: action.type,
                cart: action.payload
            };
        }

        case types.updateItemInCartType: {
            return {
                ...state,
                type: types.updateItemInCartType,
                cart: action.payload
            };
        }   

        default:
            return {
                ...state,
                type: action.type
            }
    }
}
