import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {withRouter} from "react-router";
import {LinkContainer} from "react-router-bootstrap";

const Header = ({location}) => {
    const ingredientsArray = ["vodka", "gin", "rum", "scotch", "brandy"];
    return (
        <>
            <Navbar bg="dark" expand="sm" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>recipe book</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey={location.pathname}>
                        {
                            ingredientsArray.map((item, index) => (
                                    <LinkContainer key={index} to={`/cocktail/${item}`}>
                                        <Nav.Link>{item}</Nav.Link>
                                    </LinkContainer>
                                )
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default withRouter(Header);