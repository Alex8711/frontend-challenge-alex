import React from "react";
import {Card} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


const CocktailCard = ({cocktail}) => {
    return (
        <>
            <Card className="my-3">
                <LinkContainer to={`/cocktail/detail/${cocktail.idDrink}`}>
                    <Card.Img src={cocktail.strDrinkThumb} variant="top"/>
                </LinkContainer>
                <Card.Body>
                    <LinkContainer to={`/cocktail/detail/${cocktail.idDrink}`}>
                        <Card.Title>{cocktail.strDrink}</Card.Title>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </>
    )
}

export default CocktailCard;