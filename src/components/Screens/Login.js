import React, { useState, useRef } from "react";
import Input from "../Partials/Input";
import { Alert, Form, Button, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route,useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"

function Login() {
    const history=useHistory()
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef()
    const passwordRef = useRef()
    

    const { login } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

    

        try {
            setError("");
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/profile")

        } catch {
            setError('Failed to sign in');
        }

        setLoading(false)

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

                            <h5>Welcome back to <span >Aapki Dukaan...</span></h5>
                            {error && <Alert variant="danger">{error}</Alert>}
                        </div>
                        <h1 className="mb-4"> Login</h1>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="Email" type="email" ref={emailRef} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="Password" type="password" ref={passwordRef} />
                            </Form.Group>
                            <h6 className="mt-4 mb-4">Don't have an account ? <span><Link to="/signup"> Get One</Link> </span>
                            </h6>
                            <div className="d-grid mt-4">
                                <Button disabled={loading} variant="success" type="submit" >Login</Button>
                            </div>
                        </Form>
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
