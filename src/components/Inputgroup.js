import React from 'react'
import {Row,Col,InputGroup,Dropdown,FormControl,DropdownButton} from "react-bootstrap";

function Inputgroup() {
    return (
        <div>
            <Row>
                <Col lg={2} xl={2} md={2} sm={1} xs={1}></Col>
                <Col lg={8} xl={8} md={8} sm={10} xs={10} >
            <InputGroup className="mb-3 searchbarnavbar">
                <DropdownButton
                    variant="outline-secondary"
                    title="All Categories"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>
            </Col>
                <Col lg={2} xl={2} md={2} sm={1} xs={1} ></Col>
            </Row>
        </div>
    )
}

export default Inputgroup
