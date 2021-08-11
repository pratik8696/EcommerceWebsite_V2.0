import React from 'react'
import { InputGroup } from 'react-bootstrap';
import Header from "./Header";
import Inputgroup from './Inputgroup';
import SlideShow from "./Slideshow";
import Contents from "./Contents";
// import Footer from "./Footer";


function LandingPage() {
    return (
        <div>
<Header />
<main>
<Inputgroup />
<SlideShow />
<Contents />
</main>
{/* <Footer /> */}
            
        </div>
    )
}

export default LandingPage
