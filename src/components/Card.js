import React from 'react'
import { Row, Col, Image, Card, Button } from "react-bootstrap"

function ProductCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem'}} className="cardoverflow" >
                <Card.Img variant="top" src={props.product.image} />
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Button variant="primary">Buy now</Button>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;
