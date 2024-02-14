import React from 'react';
import Button from 'react-bootstrap/Button';

//Mediante este botón se generará un nuevo pokemon dentro de la página.
export const PokeButton = ({ onClick }) => {
    return (
        <Button variant="outline-success" onClick={onClick}>Get your random Pokemon!</Button>
    );
};