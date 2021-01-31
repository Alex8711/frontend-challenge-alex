import React from "react";
import {Button} from "react-bootstrap";

const NotFound = () => {
    return (
        <>
            <h1>404 - Not Found!</h1>
            <h2>The page you are looking for is not existed</h2>
            <Button href="/" variant="info">
                Go To HomePage
            </Button>
        </>
    )
}

export default NotFound;