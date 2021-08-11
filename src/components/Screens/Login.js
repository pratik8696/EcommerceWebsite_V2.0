import React,{useState} from "react";
import Form from "../Sub-comp/Form";
import { Button, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";


function Login() {


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
                                <h5>Welcome back to <span >Aapki Dukaan.................</span></h5>
                            </div>
                            <h1 className="mb-4">Login</h1>
                        
                            <Form />
                            
                            <div className="new-acc">
                        <h6>Don't have an account ? <span><Link to="/signup"> Get One </Link>
                            </span></h6>
                        </div>
                        <div className="new-acc">
                        <h6>Check out the profile page here <span><Link to="/profile"> Click here </Link></span>
                        </h6>
                        </div>
                    </div>
                    </Col >
                    <Col lg={6} xl={6} md={6} >
                        <div className="backmg">
                            <Image src="/back.jpg" className="backgroundimg" />
                        </div>
                        
                    </Col>
                </Row>
            </div>
    );
}

export default Login;
