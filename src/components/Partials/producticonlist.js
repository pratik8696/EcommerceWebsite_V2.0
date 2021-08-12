import React from 'react';
import {Row,Col,Image} from "react-bootstrap";
import list from "./list";


function Producticonlist() {

    return (
        <div>
            <br />
            <br />
            {/* <Row>
                <Col lg={5} xl={5}></Col>
                <Col lg={4} xl={4}>
                    <Image src="/hero-title.png" className="contentsstarts" ></Image>
                </Col >
                <Col lg={3} xl={3} ></Col>
            </Row> */}

            <Row style={{  paddingTop: "2%" ,width:"auto" }} >
                <div>
                <Col xl={1.5} lg={1.5} md={1.5} sm={1.5} xs={1.5}  ></Col>
                <div style={{display:"flex",justifyContent:"center",margin:"0 auto"}}>
                {list.map((content)=>{
                    return (
                        <Col xl={1.5} lg={1.5} md={1.5} sm={1.5} xs={1.5} id={content._id} className="productlisticon iconslist ms-3" style={{ width: "160px", height: "160px", borderRadius: "100%", border: "0px solid black"}}>
                            <div style={{}}>
                                <Image src={content.link} rounded style={{ display: "flex", justifyContent: "center", margin: "0 auto",paddingTop:"1rem" }} ></Image>
                                <h6 style={{ display: "flex", justifyContent: "center", margin: "0 auto" ,textAlign:"center",marginTop:"1rem"}} className="iconlistheading">{content.name}</h6>
                         </div>
                        </Col>
                    );
                })}
                </div>


                <Col xl={1.5} lg={1.5} md={1.5} sm={1.5} xs={1.5}></Col>
                </div>
            </Row>
        </div>
    )
}

export default Producticonlist
