import React, { useState, useRef } from "react";
import Input from "../Partials/Input";
import { Alert, Form, Button, Row, Col, Image } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route ,useHistory} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import firebase from '../../firebase'

function Signup() {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const githubRef = useRef()
    const linkedinRef = useRef()
    const phonenoRef = useRef()
    const history=useHistory();
    const nameRef = useRef()
    
    const { signup} = useAuth()

    // const db = firebase.firestore().collection('users')

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordConfirmRef.current.value !== passwordRef.current.value) {
            return setError("Passwords do not match!!");
        }

        try {
            setError("");
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            // db.add({
            //     name: nameRef.current.value,
            //     email: emailRef.current.value,
            //     phone: phonenoRef.current.value,
            //     githubid: githubRef.current.value,
            //     linkedinid: linkedinRef.current.value,
            // })
            history.push("/profile")

        } catch {
            setError('Failed to create an account');
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

                            <h5>Welcome to our family <span >Aapki Dukaan...</span></h5>
                            {error && <Alert variant="danger">{error}</Alert>}
                        </div>
                        <h1 className="mb-4"> Sign Up</h1>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control placeholder="Full Name" type="text" ref={nameRef} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Email" type="email" ref={emailRef} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Password" type="password" ref={passwordRef} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Confirm Password" type="password" ref={passwordConfirmRef} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Phone Number" type="text" ref={phonenoRef} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Github ID" type="text" ref={githubRef} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Linked IN" type="text" ref={linkedinRef} />
                            </Form.Group>
                            <h6>Already have an account ? <span><Link to="/login"> SignIn</Link> </span>
                            </h6>
                            <div className="d-grid mt-4">
                                <Button disabled={loading} variant="success" type="submit" >Sign Up</Button>
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

export default Signup;
