import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CardContainer } from "../../containers/Card/Card";
import { ModalAddToCart } from "../../containers/ModalAddToCart/ModalAddToCart";
import { Notification } from '../../components/Notification/Notification';
import { useAppContext } from '../../store/AppContext';
import { addItemToCartSuccessType } from '../../store/types';
import { fetchStoreItemsAction } from '../../store/actions';

export const Store = () => {
    console.log('Componente Store sendo renderizado');
    const { state, dispatch } = useAppContext();
    const [showFeedback, setShowFeedback] = useState(false);

    const fetchProducts = async () => {
        console.log('Fetch products iniciado');
        await fetchStoreItemsAction(dispatch);
    };

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    useEffect(() => {
        console.log('Estado atualizado:', state);
        if (state.type === addItemToCartSuccessType) {
            setShowFeedback(true);
        }
    }, [state]);

    const cartTotal = state.cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
    console.log('Total do carrinho:', cartTotal);
    return (
        <div>
            <ModalAddToCart open={state.modalOpen} />
            {showFeedback && (
                <Notification
                    message='Adicionado ao carrinho com sucesso!'
                    onClose={() => setShowFeedback(false)}
                />
            )}
            <Container fluid>
                <Row>
                    {state.products.map(product => (
                        <Col
                            key={product.id}
                            xs={12}
                            md={6}
                            lg={4}
                            xl={3}>
                            <CardContainer {...product} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="cart-checkout">
                            <p>Total: ${cartTotal}</p>
                            <button>Checkout</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
