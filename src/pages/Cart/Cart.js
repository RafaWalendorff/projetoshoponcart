import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ListGroup, Button, Card } from "react-bootstrap";
import { useAppContext } from '../../store/AppContext';
import { removeItemFromCartAction } from '../../store/actions';
import { CartItem } from './CartItem';
import { ModalPaymentCard } from '../../containers/ModalPaymentCard/ModalPaymentCard';

export const Cart = () => {
    const { state, dispatch } = useAppContext();

    const [showModal, setShowModal] = useState(false);

    const cartTotal = state.cart.reduce((total, item) => total + item.quantity * item.price, 0);
    const totalItemsInCart = state.cart.reduce((total, product) => total + product.quantity, 0);

    const handleRemoveItem = (itemId) => {
        dispatch(removeItemFromCartAction(itemId));
    };

    const handleCheckout = () => {
        console.log("Finalizando compra");
        setShowModal(true);
    };

    return (
        <Container>
            <Row>
                <div className='col-12'>
                    <h2>Carrinho de compras</h2>
                </div>
            </Row>
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
                <Row className='align-items-center'>
                    <div className='col-7 '>
                        <h4>Total: R${cartTotal.toFixed(2)}</h4>
                        
                    </div>
                    <div className='col-5 d-flex align-items-center'>
                        <Button
                        className='col-12'
                            variant="success"
                            onClick={handleCheckout}
                            style={{marginTop: "1rem", marginBottom: "0rem"}}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-wallet2 mx-1"
                                viewBox="0 0 16 16">
                                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                            </svg>
                            Finalizar compra
                        </Button>
                    </div>
                </Row>
                <Row>
                <p>{totalItemsInCart.toFixed(0)} itens no carrinho</p>
                </Row>
            </Card>
            <Row className="justify-content-center">
            <ModalPaymentCard show={showModal} onHide={() => setShowModal(false)} />
            </Row>
        </Container>
    )
}