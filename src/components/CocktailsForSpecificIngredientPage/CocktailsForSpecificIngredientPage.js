import React, {useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import Loader from '../shared/Loader'
import {listCocktailsForSpecificIngredient} from '../../actions/cocktailActions'
import CocktailCard from "../CocktailCard/CocktailCard";

const CocktailsForSpecificIngredientPage = ({match}) => {
    const dispatch = useDispatch();
    const {cocktails, loading} = useSelector(state => state.cocktailsForSpecificIngredientList);
    const ingredientNameFromUrl = match.params.ingredientName;
    useEffect(() => {
        dispatch(listCocktailsForSpecificIngredient(ingredientNameFromUrl));
    }, [dispatch, ingredientNameFromUrl]);
    return (
        <>
            {loading ? (<Loader/>) : (
                <Container>
                    <Row>
                        {
                            cocktails.map((cocktail, index) =>
                                (<Col sm={12} md={6} lg={4} xl={3} key={index}>
                                    <CocktailCard cocktail={cocktail}/>
                                </Col>))
                        }
                    </Row>
                </Container>
            )}

        </>
    )
}

export default CocktailsForSpecificIngredientPage;