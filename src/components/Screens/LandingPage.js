import React from 'react'
import Header from "../Sub-comp/Header";
import Inputgroup from '../Partials/Inputgroup';
import SlideShow from "../Partials/Slideshow";
import Contents from "../Partials/Contents";
import Footer from "../Sub-comp/Footer";
import Producticonlist from '../Partials/producticonlist';
import {Row,Col,Image} from "react-bootstrap";


function LandingPage() {
    return (
        <div>
<Header />
<main>
<Inputgroup />
<SlideShow />
{/* Heading of content section */}
                <br /><br />
                <div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <Image src="/hero-title.png" className="contentsstarts" ></Image>
                    </div>
                    </div>
            
<Producticonlist />
<Contents />
<img src="/testimonials.png" style={{ width: "100%", marginTop: "2rem",marginBottom: "2rem"}} />
                <Row>
                    <Col lg={5} xl={5}></Col>
                    <Col lg={4} xl={4}>
                        <Image src="/hero-title.png" className="contentsstarts" ></Image>
                    </Col >
                    <Col lg={3} xl={3} ></Col>
                </Row>
<Contents />
</main>
            <br /><br /><br />
<Footer />
            
        </div>
    )
}

export default LandingPage;
