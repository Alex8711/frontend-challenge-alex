import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Loader from '../shared/Loader';

const CocktailCard =({cocktail})=>{
   return(
       <>
           <Card className="my-3">
           <Card.Img src={cocktail.strDrinkThumb} variant="top" />
           <Card.Body>
               <Card.Title>{cocktail.strDrink}</Card.Title>
           </Card.Body>
           </Card>
       </>
   )
}

export default CocktailCard;