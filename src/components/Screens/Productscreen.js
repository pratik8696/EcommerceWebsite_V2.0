import React from 'react'
import { Row, Col, Image, Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Sub-comp/Header"
import Footer from "../Sub-comp/Footer"
import Inputgroup from "../Partials/Inputgroup";
import productcontent from "../Partials/productcontent";

function Productscreen(props) {
    const product = productcontent.find(p => (p._id === props.match.params.id));
    // const product = products.find(p => (p._id === req.params.id));

    return (
        <div>
            <Header />
            <Inputgroup />
            <Link className="btn btn-dark m-4" to="/" style={{marginLeft:"2rem"}}>Go Back</Link>
            <main>
                <Row>
                    <Col md={6} style={{display:"flex",justifyContent:"center"}} className="mobileviewproduct">
                        <Image src={product.image} alt={product.name} fluid ></Image>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {/* <Rating
                                    rating={product.rating}
                                    text={`${product.numReviews} reviews`} /> */}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price : {product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                About : {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3} >
                        <ListGroup>
                            <ListGroup.Item>
                                Price : ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Status : {product.countInStock < 0 ? "Out of Stock😢" : "In Stock😋"}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/cart">
                                    <div className="d-grid">
                                        <Button variant="dark">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />

            </main>
            <Footer />
        </div>
    )
}

export default Productscreen
