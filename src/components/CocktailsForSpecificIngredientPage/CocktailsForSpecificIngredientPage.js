import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import { listCocktailsForSpecificIngredient } from "../../actions/cocktailActions";
import CocktailCard from "../CocktailCard/CocktailCard";
import { useHistory } from "react-router-dom";
import styles from "./CocktailsForSpecificIngredientPage.module.css";

const CocktailsForSpecificIngredientPage = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cocktails, loading } = useSelector(
    (state) => state.cocktailsForSpecificIngredientList
  );
  const ingredientNameFromUrl = match.params.ingredientName;
  useEffect(() => {
    dispatch(listCocktailsForSpecificIngredient(ingredientNameFromUrl)).catch(
      (error) => {
        history.push("/notfound");
      }
    );
  }, [dispatch, ingredientNameFromUrl, history]);
  if (!cocktails) return <h2>Not Found</h2>;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            {cocktails.map((cocktail, index) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={3}
                key={index}
                className={styles.cardStyle}
              >
                <CocktailCard cocktail={cocktail} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default CocktailsForSpecificIngredientPage;
