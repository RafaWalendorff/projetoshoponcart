import ButtonBS from 'react-bootstrap/Button'
import { Button } from '../../components/Button/Button';
import { useState, useEffect } from 'react';
import { Modal, Form, Row, Col } from 'react-bootstrap';
import { useCart } from '../../hooks/useCart';
import { useAppContext } from "../../store/AppContext";
import { closeModalAction, fetchCartItemsAction } from "../../store/actions";
import { addItemToCartInitType } from '../../store/types';


export const ModalAddToCart = ({ open }) => {
    const { state, dispatch } = useAppContext();
    const { addProduct } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const product = state.products.find(p => p.id === state.activeItemId);

    const handleClose = () => {
        console.log('fechando');
        dispatch(closeModalAction());
    }

    const handleAddToCart = async () => {
        console.log('handleAddToCart');
        setIsLoading(true);
        await addProduct(product, quantity);
        setIsLoading(false);
        handleClose();
    }

    useEffect(() => {
        fetchCartItemsAction(dispatch);
    }, []);

    const handleQuantityChange = (amount) => {
        setQuantity(prevQuantity => Math.max(prevQuantity + amount, 1));
    }

    return (
        <Modal
            title='Adicionar ao carrinho'
            show={open}
            onHide={handleClose}
            controls={[
                {
                    label: 'Criar e salvar',
                    loadingLabel: 'Criando',
                    variant: 'secondary',
                    loading: state.type === addItemToCartInitType,
                    type: 'submit',
                    form: 'form-criar-pasta'
                }
            ]}
        >
            <Modal.Header closeButton>
                <Modal.Title>Adicionar produto ao carrinho</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="align-items-center">
                    <Col xs={4} md={4}>
                        {product && <img src={product.image} alt={product.title} className="img-fluid" />}
                    </Col>
                    <Col xs={8} md={8}>
                        {product && <>
                            <h4 className='mb-0'>{product.title}</h4>
                            <p className="text-end" style={{ fontSize: '2rem' }} >R${product.price}</p>
                        </>}
                    </Col>
                </Row>
                <Form.Group controlId="quantity" className="d-flex justify-content-end">
                    <Form.Label className="me-3">Quantidade</Form.Label>
                    <div className="d-flex">
                        <ButtonBS
                            variant="outline-primary"
                            onClick={() => handleQuantityChange(-1)}
                            style={{
                                width: '40px',
                                display: 'inline-block',
                                textAlign: 'center'
                            }}>-
                        </ButtonBS>
                        <Form.Control
                            type="text"
                            readOnly value={quantity}
                            style={{
                                width: '40px',
                                display: 'inline-block',
                                textAlign: 'center'
                            }} />
                        <ButtonBS
                            variant="outline-primary"
                            onClick={() => handleQuantityChange(1)}
                            style={{
                                width: '40px',
                                display: 'inline-block',
                                textAlign: 'center'
                            }}>+
                        </ButtonBS>
                    </div>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    loading={isLoading}
                    label="Adicionar ao Carrinho"
                    loadingLabel="Adicionando..."
                    variant="primary"
                    onClick={handleAddToCart}
                    disabled={isLoading}
                />
            </Modal.Footer>
        </Modal>
    )
}
