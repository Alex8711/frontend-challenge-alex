import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setIngredientName} from '../../actions/cocktailActions'
import { LinkContainer } from "react-router-bootstrap";

const Header = ({location}) => {
    const {ingredient} = useSelector(state => state.ingredientName);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <LinkContainer to="/"  onClick={()=>{dispatch(setIngredientName(""))}}>
                <Navbar.Brand >Navbar</Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto" activeKey={location.pathname}>
                    <LinkContainer to="/cocktail/vodka" onClick={()=>{dispatch(setIngredientName("vodka"))}}>
                    <Nav.Link >Vodka</Nav.Link>
                   </LinkContainer>
                    <LinkContainer to="/cocktail/gin" onClick={()=>{dispatch(setIngredientName("gin"))}}>
                        <Nav.Link >Gin</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cocktail/rum" onClick={()=>{dispatch(setIngredientName("rum"))}}>
                        <Nav.Link >Rum</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cocktail/scotch" onClick={()=>{dispatch(setIngredientName("scotch"))}}>
                        <Nav.Link >Scotch</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cocktail/brandy" onClick={()=>{dispatch(setIngredientName("brandy"))}}>
                        <Nav.Link >Brandy</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        </>
    )
}

export default withRouter(Header);