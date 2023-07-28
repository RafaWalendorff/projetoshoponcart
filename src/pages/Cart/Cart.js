import React from 'react';
import Container from 'react-bootstrap/Container';
import { ListGroup, Button, Card } from "react-bootstrap";
import { useAppContext } from '../../store/AppContext';
import { removeItemFromCartAction } from '../../store/actions';
import { CartItem } from './CartItem';

export const Cart = () => {
    const { state, dispatch } = useAppContext();

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemFromCartAction(itemId));
    }

    const cartTotal = state.cart.reduce((total, item) => total + item.quantity * item.price, 0);

    const handleCheckout = () => {
        console.log("Finalizando compra");
    }

    return (
        <Container>
            <div className='row'>
                <div className='col-12'>
                    <h2>Carrinho de compras</h2>
                </div>
            </div>
            <ListGroup>
                {state.cart.map(item => (
                    <ListGroup.Item
                        key={item.id}
                    >
                        <CartItem {...item} onRemove={handleRemoveItem} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Card className="mt-3 p-3">
                <div className='row'>
                    <div className='col-6'>
                        <h4>Total: R${cartTotal.toFixed(2)}</h4>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <Button
                            variant="success"
                            onClick={handleCheckout}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                <path d="M3 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h7a1 1 0 0 1 .992 1.124l-1 8A1 1 0 0 1 11 12H3a1 1 0 0 1-1-1V1zm5.5 6a.5.5 0 0 0 0 1h.634l.866 2H6a.5.5 0 0 0 0 1H8.5a.5.5 0 0 0 .492-.41l.9-3.447a.5.5 0 0 0-.01-.183l-.72-2.58A.5.5 0 0 0 8.5 3H4.118l.447 1H8.5z" />
                            </svg>
                            Finalizar compra
                        </Button>
                    </div>
                </div>
            </Card>
        </Container>
    )
}