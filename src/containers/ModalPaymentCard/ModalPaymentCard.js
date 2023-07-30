import React from 'react';
import { Modal, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useCart } from '../../hooks/useCart';
import { currencyFormatter } from '../../utilities/formatCurrency';

export const ModalPaymentCard = ({ show, onHide }) => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
  }, 0);

  return (
    <Modal id="ModalPaymentCard" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar compra</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="card">
          <Card.Body>
            <Form className="form-card">
              <Row className="main">
                <Col xs={12}>
                  <span>Cart</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Shipping confirmation</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>Credit card checkout</span>
                </Col>
              </Row>
              <Row className="justify-content-center mrow">
                <Col xs={12}>
                  <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" width="35px" height="35px" alt="Mastercard logo" />
                  <img src="https://img.icons8.com/color/48/000000/visa.png" width="35px" height="35px" alt="Visa logo" />
                  <img src="https://img.icons8.com/color/48/000000/paypal.png" width="35px" height="35px" alt="Paypal logo" />
                </Col>
              </Row> <Form.Group>
                <Form.Control type="text" className="p-0" id="number" required />
                <Form.Label htmlFor="number" className="form-control-placeholder p-0">Número do cartão</Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" className="p-0" id="name" required />
                <Form.Label htmlFor="name" className="form-control-placeholder p-0">Nome no cartão</Form.Label>
              </Form.Group>
              <Row>
                <Col sm={4} xs={12}>
                  <Form.Group>
                    <Form.Control type="text" className="p-0" id="expdate" required />
                    <Form.Label htmlFor="expdate" className="form-control-placeholder p-0">Validade</Form.Label>
                  </Form.Group>
                </Col>
                <Col sm={4} xs={12}>
                  <Form.Group>
                    <Form.Control type="password" className="p-0" id="passw" required />
                    <Form.Label htmlFor="passw" className="form-control-placeholder p-0">CVV</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Row className="lrow mt-4 mb-3">
          <Col sm={8} xs={12}><h3>Total: {currencyFormatter(totalPrice)}</h3></Col>
        </Row>
        <Row className="mb-2">
          <Col sm={12}>
            <Button type="button" className="btn btn-primary btn-block">Pagar</Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}