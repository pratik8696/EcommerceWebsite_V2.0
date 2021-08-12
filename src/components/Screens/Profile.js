import React from "react";
import Form from "../Sub-comp/Form";
import { Button, Row, Col, Image,ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from "../Sub-comp/Header"
import Footer from "../Sub-comp/Footer"
import Inputgroup from "../Partials/Inputgroup";

function Profile() {
    return (
        <div>
            <Header />
            <Inputgroup />
            <main >
            <Row style={{backgroundColor:"Black"}}>
                <Col lg={6} md={6} sm={12} xl={6}>
                    <div>
                        <span style={{padding:"20%"}}>
                        <Image src="avatar-2.png" />
                        </span> 
                    </div>
                    
                </Col >
                <Col lg={6} xl={6} sm={12} xl={6}>
                    
                </Col>
            </Row>
                </main >
            <Footer />
        </div>
    );
}

export default Profile;
