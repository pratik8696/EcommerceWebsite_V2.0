import React from 'react'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top position-sticky navpos">
                <div className="container-fluid">
                    <Link to="/"><span className="navbar-brand"><img src="/logo.png" className="logoinnav">
                    </img><h5 className="logoheading">Aapki Dukaan</h5></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto ms-4">
                            <li className="nav-item">
                                <a className="nav-link active">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Top Deals</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Departments</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" >Action</a>
                                    <a className="dropdown-item" >Another action</a>
                                    <a className="dropdown-item" >Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" >Separated link</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >About Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="me-3">
                                <Link to="/login"><li>Login</li></Link>
                                </ul>
                            <Link to="/profile"><i className="far fa-user ms-3 me-3"></i></Link>
                            <Link to="/cart"><i className="fas fa-shopping-cart ms-3 me-3"></i></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
