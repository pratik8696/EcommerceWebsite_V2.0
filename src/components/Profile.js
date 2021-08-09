import React from "react";
import Form from "./Form";
import { Button, Row, Col, Image,ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Profile() {
    return (
        <div>
            <Row>
                <Col lg={6} md={6} sm={12} xl={6}>
                    <div className="brand">
                        <img className="logo" src="/logo.png"></img>
                        <h2>Aapki Dukaan</h2>
                    </div>
                    <div className="form-div">
                        <img src="/user.png" className="user-icon ms-4 mb-4"></img>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Name : </ListGroup.Item>
                            <ListGroup.Item>Name : </ListGroup.Item>
                            <ListGroup.Item>Name : </ListGroup.Item>
                            <ListGroup.Item>Name : </ListGroup.Item>
                            <ListGroup.Item>Name : </ListGroup.Item>
                        </ListGroup>
                        
                    </div>
                </Col >
                <Col lg={6} xl={6} >
                    <div className="backmg">
                        <Image src="/back.jpg" className="backgroundimg" />
                    </div>

                </Col>
            </Row>
        </div>
    );
}

export default Profile;
