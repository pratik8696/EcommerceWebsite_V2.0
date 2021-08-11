import React from 'react';
import {Form} from "react-bootstrap";

function Input(props) {
    return (
        <div>
            <Form className="mb-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type={props.type} placeholder={props.placeholder} />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Input;
