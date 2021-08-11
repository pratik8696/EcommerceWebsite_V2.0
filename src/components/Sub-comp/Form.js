import React from 'react';
import Input from "../Partials/Input";
import {Button} from "react-bootstrap";

function Form() {
    return (
        <div>
            <Input placeholder="Email" type="email"/>
            <Input placeholder="Password" type="password" />
            
        </div>
    )
}

export default Form;
