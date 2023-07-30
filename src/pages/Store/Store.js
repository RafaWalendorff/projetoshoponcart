import { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from "../../components/Card/Card";
import { ModalAddToCart } from "../../containers/ModalAddToCart/ModalAddToCart";
import { Notification } from '../../components/Notification/Notification';
import { useAppContext } from '../../store/AppContext';
import { addItemToCartSuccessType } from '../../store/types';
import { fetchStoreItemsAction } from '../../store/actions';

export const Store = () => {
    console.log('Componente Store sendo renderizado');
    const { state, dispatch } = useAppContext();
    
    const [showFeedback, setShowFeedback] = useState(false);

    const fetchProducts = useCallback(async () => {
        console.log('Fetch products iniciado');
        await fetchStoreItemsAction(dispatch);
    }, [dispatch]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

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
                    className="notification"
                    message='Adicionado ao carrinho com sucesso!'
                    onClose={() => setShowFeedback(false)}
                />
            )}
            <Container fluid>
                <Row className="d-flex align-items-stretch">
                    {state.products.map(product => (
                        <Col
                        className='mb-3 d-flex align-items-stretch'
                            key={product.id}
                            xs={6}
                            md={4}
                            lg={4}
                            xl={2}>
                            <Card {...product} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xs={12}>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
