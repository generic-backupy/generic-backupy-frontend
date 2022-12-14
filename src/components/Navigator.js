import React from "react";
import {Navbar, Nav,Collapse,NavItem, NavbarBrand, Button} from 'reactstrap';

function Navigator() {
    //TODO: Add Functions for user authentications
    return (
                <React.Fragment>
                    <Navbar className="ml-auto py-3 navigator-bar" dark expand="xl" fixed="top">
                        <div className="d-inline-flex container">
                        <NavbarBrand className="nav-header" href="/">
                        <h4><b>Generic Backupy </b></h4>
                        </NavbarBrand>

                        <Collapse navbar  className="justify-content-end" >

                        <Nav navbar>
                        <NavItem>
                            <Button outline color="secondary">
                                <span className="fa fa-sign-in fa-lg"></span> Login
                            </Button>
                                    
                            <Button outline color="secondary">
                                <span className="fa fa-sign-out fa-lg"></span> Register
                            </Button>
                        </NavItem>
                        </Nav>
                        </Collapse>
                        </div>
                    </Navbar>
                </React.Fragment>
    );
};

export default Navigator;
