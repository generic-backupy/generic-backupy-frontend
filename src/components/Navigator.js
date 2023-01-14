import React from "react";
import {Navbar, Collapse, NavbarBrand, Button, ButtonGroup, Form} from 'reactstrap';

function Navigator() {
    //TODO: Add Functions for user authentications


    const currentUser = null;

    const handleLogoutClick = () => {
        console.log('No logout currently.');
    }

    const authButton = () => {
        if (currentUser === null) {
            return (
                <ButtonGroup>
                    <Button variant="secondary" href="/login">Login</Button>
                    <Button variant="secondary" href="/">Signup</Button>
                </ButtonGroup>
            )

        } else {
            return <Button variant="secondary" onClick={handleLogoutClick}>Logout</Button>
        }
    }



    return (
                <React.Fragment>
                    <Navbar className="ml-auto py-3 navigator-bar" dark expand="xl" fixed="top">
                        <div className="d-inline-flex container">
                        <NavbarBrand className="nav-header" href="/">
                        <h4><b>Generic Backupy </b></h4>
                        </NavbarBrand>

                        <Collapse navbar  className="justify-content-end" >

                        </Collapse>
                        </div>
                        <Form className="mx-3">
                            {authButton()}
                        </Form>
                    </Navbar>
                </React.Fragment>
    );
};

export default Navigator;
