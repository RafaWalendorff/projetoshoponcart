import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import ButtonBS from 'react-bootstrap/Button';
import { useCart } from "../../hooks/useCart";

export const HeaderPartial = () => {
    const { cart } = useCart();
    const totalItemsInCart = cart.reduce((total, product) => total + product.quantity, 0);


    return (
        <Navbar sticky='top' className="bg-white shadow-sm mb-3">
            <Container>
            <Link to="/" className="navbar-brand">ShopOn</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Início</Link>
                        <Link className='nav-link' to="store">Produtos</Link>
                    </Nav>
                </Navbar.Collapse>
                <ButtonBS
                    as={Link}
                    to="/cart"
                    style={{ width: '3rem', height: '3rem', position: 'relative' }}
                    variant='outline-primary'
                    className='rounded-circle'
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-cart-check-fill"
                        viewBox="0 1 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                        style={{
                            color: 'white',
                            width: '1.5rem',
                            height: '1.5rem',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            transform: 'translate(25%, 25%)',
                        }}
                    >{totalItemsInCart}
                    </div>
                </ButtonBS>
            </Container>
        </Navbar>
    )
}