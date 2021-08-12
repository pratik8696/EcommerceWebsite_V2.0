import React from "react";
import Form from "../Sub-comp/Form";
import { Button, Row, Col, Image, ListGroup } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from "../Sub-comp/Header"
import Footer from "../Sub-comp/Footer"
import Inputgroup from "../Partials/Inputgroup";
import { Navbar, Container, Nav } from "react-bootstrap";

function Profile() {
    return (
        <div>
            <Header />
            <Inputgroup />
            <main >
                <br />
                <div style={{ display: "flex", justifyContent: "center" }} >
                    <div>
                        <h1>User Profile</h1>
                        <br />
                        <span style={{ padding: "0%" }}>
                            <Image src="avatar-2.png" />
                        </span>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>
                        </Col>
                    </Row>

                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>

                        </Col>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6} >
                            <div class="form-group">
                                <fieldset>
                                    <label class="form-label mt-4" for="readOnlyInput">Readonly input</label>
                                    <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here..." readonly="" />
                                </fieldset>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                            <div class="form-group">
                                <label for="formFile" class="form-label mt-4">Default file input example</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                            <fieldset class="form-group">
                                <legend class="mt-4">Radio buttons</legend>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                                        Option one is this and that—be sure to include why it's great
                                    </label>
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                                        Option two can be something else and selecting it will deselect option one
                                    </label>
                                </div>
                                <div class="form-check disabled">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                                        Option three is disabled
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend class="mt-4">Switches</legend>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    <label class ="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                                    <label class ="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                </div>
                            </fieldset>

                        </Col>
                    </Row>

                </div>





                <br /><br />
                <br /><br />
            </main >
            <Footer />
        </div>
    );
}

export default Profile;
