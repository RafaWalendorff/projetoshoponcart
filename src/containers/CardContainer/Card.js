import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CardContainer.css';


export const CardContainer = ({ id, image, title, description, price, onClick }) => {
    console.log(typeof onClick)
    const product = { id, image, title, description, price };


    return (
        <CardBS className="bg-light text-black d-flex flex-column">
            <CardBS.Img  onClick={() => onClick(product)} src={image} alt="Card image" />
            <CardBS.Body className="text-center d-flex flex-column">
                <CardBS.Title className="responsive-text m-0">{title}</CardBS.Title>
                <CardBS.Text className="responsive-text flex-grow-1 m-0">
                    {description}
                </CardBS.Text>
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <h3 className='responsive-text-price m-0'>R${price}</h3>
                    <Button
                        className='responsive-text-button'
                        variant="primary"
                        onClick={() => onClick(product)}>
                        Adicionar ao carrinho
                    </Button>
                </div>
            </CardBS.Body>
        </CardBS>
    )
}
