import React from "react";
import Form from "./Form";
import { Button, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Signup() {
    return (
        <div>
            <Row>
                <Col lg={6} md={6} sm={12} xl={6}>
                    <div className="brand">
                        <img className="logo" src="/logo.png"></img>
                        <h2>Aapki Dukaan</h2>
                    </div>
                    <div className="form-div">
                        <div className="welcome-div">
                            <h5>Welcome to our family <span >Aapki Dukaan...</span></h5>
                        </div>
                        <h1 className="mb-4">Login</h1>

                        <Form />
                        <div className="new-acc">
                            <h6>Already have an account ? <span><Link to="/"> Get One </Link>
                                </span>
                            </h6>
                        </div>
                        <div className="new-acc">
                            <h6>Check out the profile page here <span><Link to="/profile"> Click here </Link></span>
                            </h6>
                        </div>
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

export default Signup;
