import React from "react";


function Footer() {
    return (
        <div className="mainfooter">
            <div className="container">

                <div className="row">
                    <hr className="footerhr" />
                    {/* Column1 */}
                    <div className="col">
                        <h4 className="footerhead">Aapki Dukaan Inc</h4>
                        <h6 className="list-unstyled footerhead">
                            <div className="brand">
                                <img className="logo mb-3" src="/logo.png"></img>
                                <li className="list-unstyled footerhead">No: 58 A, Chandani Chauk Street,Delhi, India</li>
                            </div>
                        </h6>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h6 className="footerhead" style={{ color: "#56B280" }}>Info</h6>
                        <ui className="list-unstyled" >
                            <li className="footerhead">New Season</li>
                            <li className="footerhead">Most Searched</li>
                            <li className="footerhead">Most Selled</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col" >
                        <h6 className="footerhead" style={{ color: "#56B280" }}>About</h6>
                        <ui className="footerhead list-unstyled" >
                            <li className="footerhead"  >Help</li>
                            <li className="footerhead"  >Shipping</li>
                            <li className="footerhead" >Affiliate</li>
                        </ui>
                    </div>

                    {/* Column3 */}
                    <div className="col" >
                        <h6 className="footerhead" style={{ color:"#56B280"}}>About</h6>
                        <ui className="footerhead list-unstyled" >
                            <li className="footerhead"  >Help</li>
                            <li className="footerhead"  >Shipping</li>
                            <li className="footerhead" >Affiliate</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm footerhead " style={{textAlign:"center",marginTop:"2rem"}}>
                        &copy;{new Date().getFullYear()} Aapki Dukaan | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;