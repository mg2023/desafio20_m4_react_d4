import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Products(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.descrip}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default Products;