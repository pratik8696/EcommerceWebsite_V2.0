import React from 'react'
import { Row, Col, Image, Card, Button } from "react-bootstrap"
import ProductCard from './Card'
import productcontent from "./productcontent";


function Contents() {
    return (
        <div >
            <br />
            <br />
            <Row>
                <Col lg={5} xl={5}></Col>
                <Col lg={4} xl={4}>
                    <Image src="/hero-title.png" className="contentsstarts" ></Image>
                </Col >
                <Col lg={3} xl={3} ></Col>
            </Row>
            <Row style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%" }}>
                {productcontent.map((content) => {
                    return (
                        <Col key={content._id} sm={12} md={6} lg={4} xl={3} >
                        <ProductCard 
                        product={content}
                        />
                        </Col>);
                })}
        </Row>
        </div >
    )
}

export default Contents
