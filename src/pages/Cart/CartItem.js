import React from 'react';
import { Badge, Form, Button } from "react-bootstrap";
import { useCart } from "../../hooks/useCart";
import { currencyFormatter } from "../../utilities/formatCurrency"

export const CartItem = ({ id, image, title, quantity, price }) => {
  const { updateProductAmount, removeProduct } = useCart();

  const handleIncrease = () => {
    updateProductAmount(id, 1);
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      updateProductAmount(id, -1);
    }
  }

  const handleRemoveItem = () => {
    removeProduct(id);
  }

  return (
    <div className="row align-items-center">
      <div className="col-2 ">
        <img
          src={image}
          alt={title}
          width={65}
          className="image"
        />
      </div>
      <div className="col-4">
        <div className="fw-bold ">{title}</div>
      </div>
      <div className="col-2 d-flex justify-content-around cart-items">
        <Button
          variant='outline-primary'
          onClick={handleDecrease}
          style={{
            width: '40px',
            display: 'inline-block',
            textAlign: 'center'
          }}
        >-</Button>
        <Form.Control
          type="text"
          readOnly
          value={quantity}
          style={{
            width: '50px',
            display: 'inline-block',
            textAlign: 'center'
          }}
        />
        <Button
          variant='outline-primary'
          onClick={handleIncrease}
          style={{
            width: '40px',
            display: 'inline-block',
            textAlign: 'center'
          }}
        >+</Button>
      </div>
      <div className="col-2 d-flex justify-content-center">
        <Button
          variant="danger"
          className='rounded-circle'
          style={{ width: '1.2rem', height: '1.2rem', padding: '0', }}
          onClick={handleRemoveItem}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="currentColor"
              className="bi bi-x-circle"
              viewBox="0 0 16 16"
              >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </Button>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <Badge bg="primary" pill style={{ fontSize: '1rem'}}>
          {currencyFormatter(price)}
        </Badge>
      </div>
    </div>
  )
}