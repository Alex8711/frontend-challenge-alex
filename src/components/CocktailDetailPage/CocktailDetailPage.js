import React from "react";
import {useEffect, useState} from "react";
import {
    Container,
    Col,
    Row,
    Card,
    ListGroup,
    Button,
    Form,
} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useHistory} from "react-router-dom";
import Loader from "../shared/Loader"
import {useDispatch, useSelector} from "react-redux";
import {cocktailDetailsById} from '../../actions/cocktailActions'


const CocktailDetailPage = ({match}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {details, loading} = useSelector(state => state.cocktailDetails)
    /*const cocktailId = details.idDrink;*/
    const cocktailId = match.params.id;
    useEffect(() => {
        dispatch(cocktailDetailsById(cocktailId));
    }, [dispatch]);

    return (
        <>
            {loading ? (<Loader/>) : (<Container>
                <Button onClick={() => history.goBack()} variant="info">
                    Go Back
                </Button>
                <Row>
                    <Col md={6}>
                        <Card className="my-3">
                            <Card.Img src={details.strDrinkThumb} variant="top"/>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <ListGroup className="my-3" variant="flush">
                            <ListGroup.Item>
                                {" "}
                                <h3>{details.strDrink}</h3>{" "}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Ingredients
                                    :</h5> {details.strIngredient1}
                                {details.strIngredient2?",":""}{details.strIngredient2}
                                {details.strIngredient3?",":""}{details.strIngredient3}
                                {details.strIngredient4?",":""}{details.strIngredient4}
                                {details.strIngredient5?",":""}{details.strIngredient5}
                                {details.strIngredient6?",":""}{details.strIngredient6}
                                {details.strIngredient7?",":""}{details.strIngredient7}
                                {details.strIngredient8?",":""}{details.strIngredient8}
                                {details.strIngredient9?",":""}{details.strIngredient9}
                                {details.strIngredient10?",":""}{details.strIngredient10}
                                {details.strIngredient11?",":""}{details.strIngredient11}
                                {details.strIngredient12?",":""}{details.strIngredient12}
                                {details.strIngredient13?",":""}{details.strIngredient13}
                                {details.strIngredient14?",":""}{details.strIngredient14}
                                {details.strIngredient15?",":""}{details.strIngredient15}
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <ListGroup className="my-3" variant="flush">
                        <ListGroup.Item variant="success">
                            Instructions: {details.strInstructions}
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
            </Container>)}
        </>
    )
}


export default CocktailDetailPage;