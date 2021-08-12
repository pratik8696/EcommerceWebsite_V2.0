import React, { useState } from "react";
import Form from "../Sub-comp/Form";
import Input from "../Partials/Input";
import { Button, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Signup() {

    const [user, setuser] = useState(true);

    function notuser() {
        setuser(!user);
    }

    return (
        <div>
            <Row>
                <Col lg={6} md={6} sm={12} xl={6}>
                    <Link to="/">
                        <div className="brand">
                            <img className="logo" src="/logo.png"></img>
                            <h2>Aapki Dukaan</h2>
                        </div>
                    </Link>
                    <div className="form-div">
                        <div className="welcome-div">
                            {user ? (<h5>Welcome back to <span >Aapki Dukaan.................</span></h5>)
                                : (<h5>Welcome to our family <span >Aapki Dukaan...</span></h5>)}

                        </div>
                        <h1 className="mb-4">{user ? "Login" : "Sign Up" }</h1>

                        <Input placeholder="Full Name" type="email" />
                        <Input placeholder="Phone Number" type="password" />

                        {user ? "" : (<div>
                            <Form />

                        </div>)}

                        {user ? (<div className="new-acc mb-4">
                            <h6>Don't have an account ? <span onClick={notuser}> Get One</span></h6>
                        </div>) : (<div className="new-acc mb-4">
                            <h6>Already have an account ? <span onClick={notuser}> Get One </span>
                            </h6>
                        </div>)}
                                <Link to="/">
                        <div className="d-grid">
                            <Button variant="success">{user ? "Login" : "Sign Up"}</Button>
                        </div>
                        </Link>
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

export default Signup;
