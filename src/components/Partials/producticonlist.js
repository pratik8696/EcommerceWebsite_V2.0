import React from 'react';
import {Row,Col,Image} from "react-bootstrap";
import list from "./list";


function Producticonlist() {
    return (
        <div>
            <Row style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%" ,width:"auto" }} >
                {list.map((content)=>{
                    return (
                        <Col xl={1.5} lg={1.5} md={1.5} sm={1.5} xs={1.5} id={content._id} className="productlisticon iconslist" style={{width:"auto"}}>
                            <div style={{ width: "auto" }}>
                           <Image src={content.link} rounded></Image>
                                <h6>{content.name}</h6>
                         </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    )
}

export default Producticonlist
