import React from 'react'
import Header from "../Sub-comp/Header";
import Inputgroup from '../Partials/Inputgroup';
import SlideShow from "../Partials/Slideshow";
import Contents from "../Partials/Contents";
import Footer from "../Sub-comp/Footer";


function LandingPage() {
    return (
        <div>
<Header />
<main>
<Inputgroup />
<SlideShow />
<Contents />
                <img src="/testimonials.png" style={{ width: "100%", marginTop: "2rem",marginBottom: "2rem"}} />
                <Contents />
</main>
<Footer />
            
        </div>
    )
}

export default LandingPage;
