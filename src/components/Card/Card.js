import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Card = ({ id, image, title, description, price, onClick }) => {
    const product = { id, image, title, description, price };

    return (
        <CardBS className="bg-light text-black">
            <CardBS.Img src={image} alt="Card image" />
            <CardBS.Body className="text-center">
                <CardBS.Title>{title}</CardBS.Title>
                <CardBS.Text>
                    {description}
                </CardBS.Text>
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <h3>R${price}</h3>
                    <Button
                        variant="primary"
                        onClick={() => onClick(product)}>
                        Adicionar ao carrinho
                    </Button>
                </div>
            </CardBS.Body>
        </CardBS>
    )
}
