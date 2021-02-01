import React from "react";
import { Row, Container, ListGroup } from "react-bootstrap";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center my-3">
          <h3>Welcome to Recipe Book</h3>
        </Row>
        <Row className="justify-content-md-center my-3">
          <ListGroup className="my-3 borderless" variant="flush">
            <ListGroup.Item>
              <p className={styles.textHomePage}>
                There are 5 ingredients(vodka,gin,rum,scotch and brandy) in the
                NavBar. You can click each of them to get the full list of
                cocktails for that specific ingredient.
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className={styles.textHomePage}>
                You also can click on a cocktail to get more detailed
                information about it
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
