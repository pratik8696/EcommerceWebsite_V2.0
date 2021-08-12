import React from 'react'
import { Row, Col, Image, Card, Button } from "react-bootstrap"
import {Link} from "react-router-dom";

function ProductCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem'}} className="cardoverflow mt-3" >
                <Link to={`/product/${props.product._id}`}><Card.Img variant="top" src={props.product.image}  className="fit" fluid />
                <Card.Body>
                    <Card.Text><span style={{ color: "#000000", fontFamily: "Poppins" }} >
                        {props.product.name}
                        </span></Card.Text>
                    <Card.Text className="ml-auto">
                        <span style={{ color:"#56B280",fontFamily:"Poppins"}}>${props.product.price}</span>
                    </Card.Text>
                    {/* <Button variant="primary">Buy now</Button>
                    <Button variant="primary" className="ms-3">Add to Cart</Button> */}
                </Card.Body></Link>
            </Card>
        </div>
    )
}

export default ProductCard;
